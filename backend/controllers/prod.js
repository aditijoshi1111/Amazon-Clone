var mongoose=require('mongoose');
var productModel=require('../models/products');
// var x=require('../uploads')
var fs=require('fs');
var path=require('path');

mongoose.set('useFindAndModify', false);

async function addProduct(req,res){
    try{
        var newProduct={
            Product_name: req.body.product_name,
            img: {
                data: fs.readFileSync(path.join(__dirname,'../uploads/',req.file.filename)),
                ContentType: 'image'
            },
            Product_description: req.body.description,
            Seller_name: req.body.seller_name,
            Price: req.body.price
        }
        console.log(newProduct);
    
        const response= await new Product(newProduct).save()
        res.json(response);
        return response;
    }
    catch(error){
        console.log("Error while adding product:- ",error);
    }
}

async function getAllProducts(req,res){
    try{
        var response = await productModel.find();
        res.json(response);
        return response;
    }
    catch(error){
        console.log("Error getting All products:- ",error);
    }
}

async function removeProduct(req,res){
    try{
        let id=req.params.id;
        const item=await productModel.findByIdAndRemove({_id: id}, function(err,data){
            if(!err) console.log("deleted product!");
        });
        return item;
    }
    catch(error){
        console.log("Error deleting a product:- ",error);
    }
}
module.exports.addProduct= addProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.removeProduct = removeProduct;