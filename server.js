require("dotenv").config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");
const { apiLimiter } = require("./middleware/rateLimiter");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3001;

// Validate required environment variables
if (!process.env.SESSION_SECRET) {
  // eslint-disable-next-line no-console
  console.error("ERROR: SESSION_SECRET environment variable is required");
  // eslint-disable-next-line no-console
  console.error("Please set SESSION_SECRET in your .env file");
  process.exit(1);
}

const app = express();

// CORS configuration for Next.js frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
}));

// Rate limiting (applied globally, stricter limits can be applied to specific routes)
app.use("/api", apiLimiter);

const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // Use "lax" for development to allow cross-origin requests (localhost:3000 -> localhost:3001)
    // In production, consider "strict" if frontend and backend are on same domain
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
//Activating views and public folders middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(routes);

// Error handler middleware (must be last)
app.use(errorHandler);

sequelize.sync({ force: false }).then(() => {
  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
