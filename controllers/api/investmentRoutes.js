// const router = require("express").Router();
// const { Investment } = require("../../models");
// const withAuth = require("../../utils/auth");

// router.post("/", withAuth, async (res, req) => {
//   try {
//     const newInvestment = await Investment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newInvestment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get("/", async (res, req) => {});

// module.exports = router;
