const withAuth = (req, res, next) => {
  // reroute user to login route if user not logged in
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
  