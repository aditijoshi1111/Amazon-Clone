var mongoose=require('mongoose');
var Product=require('../models/products');
// var x=require('../uploads')
var fs=require('fs');
var path=require('path');

addProduct = (req,res)=>{
    var object=new Product({
        product_name: req.body.product_name,
        img: {
            data: fs.readFileSync(path.join(__dirname,'../uploads/',req.file.filename)),
            ContentType: 'image'
        },
        description: req.body.description,
        seller_name: req.body.seller_name,
        price: req.body.price
    });
    console.log(object);
}

module.exports.addProduct= addProduct;