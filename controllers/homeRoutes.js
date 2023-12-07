const router = require("express").Router();
const { Farm } = require("../models");
const withAuth = require("../utils/auth");

router.get('/login', async (req, res) => {
    try {
        const farmData = await Farm.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const farms = farmData.map((farm) => farm.get({ plain: true }));
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
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const farm = farmData.get({ plain: true });
        res.render('farm', {
            ...farm,
            logged_in: req.session.logged_in
        });
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;