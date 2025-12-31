# Fund My Farm

A full-stack e-commerce platform that connects investors with farms, enabling users to browse agricultural operations, invest in farm products, and track their investments—bringing traditional agriculture to the digital marketplace.

## What I Built / Highlights

- **Full-stack e-commerce platform** with user authentication, farm browsing, and investment tracking
- **Stripe payment integration** for secure checkout and investment processing
- **Session-based authentication** with bcrypt password hashing and protected routes
- **RESTful API architecture** with Sequelize ORM for database operations
- **Server-side rendered views** using Handlebars templates with Materialize CSS

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: Express Session, bcrypt
- **Frontend**: Handlebars.js, Materialize CSS
- **Payment Processing**: Stripe
- **Session Storage**: Connect-Session-Sequelize

## Key Features

- User registration and authentication with secure password hashing
- Browse farms and view detailed farm information with associated products
- Investment tracking through user profiles
- Secure payment processing via Stripe checkout
- Session management with persistent storage
- Responsive UI with Materialize CSS framework

## Architecture Overview

Fund My Farm follows an MVC (Model-View-Controller) architecture. The Express.js server handles routing, with controllers managing business logic and API endpoints. Sequelize ORM abstracts database operations, connecting to MySQL for data persistence. Handlebars templates render server-side views, while client-side JavaScript handles interactive features like authentication and checkout. Session management is handled through Express Session with Sequelize-backed storage, ensuring user sessions persist across server restarts.

## Screenshots

### Homepage
![Homepage](Screenshot%202023-12-14%20at%206.40.34%20PM.png)
The home screen displays a list of available farms. Login is required to invest in farms.

### Login
![Login](Screenshot%202023-12-14%20at%206.41.01%20PM.png)
Create a Fund My Farm account to get started investing in farms.

### Profile
![Profile](Screenshot%202023-12-14%20at%206.42.21%20PM.png)
View all farms you're currently invested in from your profile page.

## Quickstart

### Prerequisites

- Node.js (v18 or higher)
- MySQL (v8.0 or higher) or Docker Compose
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GrassHopper12345/fund-my-farm.git
cd fund-my-farm
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials and session secret
```

4. Set up the database (choose one method):

**Option A: Local MySQL**
```bash
mysql -u root -p
source db/schema.sql
quit
```

**Option B: Docker Compose**
```bash
docker compose up -d
# Wait a few seconds for MySQL to initialize
mysql -u root -p -h 127.0.0.1 -P 3306
source db/schema.sql
quit
```

5. Seed the database:
```bash
npm run seed
```

6. Start the server:
```bash
npm start
# or
node server.js
```

7. Navigate to `http://localhost:3001` in your browser.

## Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
DB_NAME=fund_my_farm_db
DB_USER=root
DB_PASSWORD=your_password
SESSION_SECRET=your_session_secret_here
PORT=3001
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
JAWSDB_URL=your_jawsdb_url  # Optional, for production deployment
```

**Important**: Never commit your `.env` file. The `.env.example` file is provided as a template.

## Database Setup

### Local MySQL

1. Ensure MySQL is installed and running
2. Create the database:
```bash
mysql -u root -p
source db/schema.sql
quit
```

### Docker Compose

A `docker-compose.yml` file is provided for easy MySQL setup:

```bash
docker compose up -d
```

This will start a MySQL 8.0 container with:
- Database: `fund_my_farm_db`
- User: `root`
- Password: `password` (change in docker-compose.yml for production)
- Port: `3306`
- Persistent data volume

After starting the container, run the schema:
```bash
mysql -u root -p -h 127.0.0.1 -P 3306
source db/schema.sql
quit
```

To stop the container:
```bash
docker compose down
```

## Testing & Linting

```bash
# Run linter
npm run lint

# Format code
npm run format

# Check formatting without making changes
npm run format:check

# Run tests
npm test
```

## Deployment

### Recommended Hosting Platforms

- **Render**: Easy PostgreSQL/MySQL setup, free tier available
- **Railway**: Simple deployment with database provisioning
- **Fly.io**: Global edge deployment with MySQL support

### Deployment Steps

1. Set up a MySQL database (JawsDB, PlanetScale, or your host's MySQL service)
2. Configure environment variables in your hosting platform
3. Set `JAWSDB_URL` or individual DB credentials in production
4. Ensure `SESSION_SECRET` is a strong, random string
5. Deploy your code (most platforms auto-detect Node.js apps)

### Demo

For a live demo, please refer to the walkthrough video or contact the repository maintainers.

## Topics

`nodejs` `express` `sequelize` `mysql` `handlebars` `authentication` `e-commerce` `stripe` `full-stack` `mvc`

## Credits

- [GrassHopper12345](https://github.com/GrassHopper12345)
- [Rex10K](https://github.com/Rex10k)
- [nofox1](https://github.com/nofox1)
- [Osmilliardo](https://github.com/Osmilliardo)
- [ShelbyBennett](https://github.com/ShelbyBennett)

## License

ISC
