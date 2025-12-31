/**
 * Centralized error handler middleware
 * Distinguishes between API routes (JSON responses) and Handlebars routes (HTML error pages)
 */
const errorHandler = (err, req, res, next) => {
  // Log error for debugging (in production, use a proper logger)
  console.error("Error:", err);

  // Determine if this is an API route
  const isApiRoute = req.path.startsWith("/api");

  // Default error status and message
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // In production, don't leak stack traces
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (isApiRoute) {
    // API routes return JSON
    res.status(status).json({
      error: message,
      ...(isDevelopment && { stack: err.stack }),
    });
  } else {
    // Handlebars routes return error page
    res.status(status).render("error", {
      error: {
        status,
        message,
        ...(isDevelopment && { stack: err.stack }),
      },
      logged_in: req.session?.logged_in || false,
    });
  }
};

module.exports = errorHandler;
