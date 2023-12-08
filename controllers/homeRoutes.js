const router = require("express").Router();
const { Farm, User, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
    console.log(123);
    try {
        const farmData = await Farm.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        console.log(farmData);
        const farms = farmData.map((farm) => farm.get({ plain: true }));
        console.log(farms);
        res.render('homepage', {
            farms,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/farm/:id', async (req, res) => {
    try {
        const farmData = await Farm.findByPk(req.params.id, {
            include: [
                {
                    model: Product
                },
            ],
        });
        const farm = farmData.get({ plain: true });
        res.render('farm', {
            ...farm,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Farm, Product }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
module.exports = router;