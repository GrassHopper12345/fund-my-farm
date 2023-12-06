const router = require("express").Router();
const { Farm } = require("../models");
const withAuth = require("../utils/auth");

router.get('/login', async (req, res) => {
    console.log(123);
    try {
        res.render('login');
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;