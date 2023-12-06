const router = require("express").Router();
const { Product, Farm, ProductToFarm } = require("../../models");
const withAuth = require("../../utils/auth");

//get all products
router.get('/', async (req, res) => {
    //find all products
    try{
        const productData = await Product.findAll({
            include: [{model: Farm, through: ProductToFarm}]
        });
        res.status(200).json(productData);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;