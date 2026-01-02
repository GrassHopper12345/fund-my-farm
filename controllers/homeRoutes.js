const router = require("express").Router();
const { Farm, User, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res, next) => {
  try {
    const farmData = await Farm.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    const farms = farmData.map((farm) => farm.get({ plain: true }));
    res.render("homepage", {
      farms,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/farm/:id", async (req, res, next) => {
  try {
    const farmData = await Farm.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });

    if (!farmData) {
      const error = new Error("Farm not found");
      error.status = 404;
      return next(error);
    }

    const farm = farmData.get({ plain: true });
    res.render("farm", {
      ...farm,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/profile", withAuth, async (req, res, next) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Farm, Product }],
    });

    if (!userData) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
