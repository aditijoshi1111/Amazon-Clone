const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    Product_name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        ContentType: String
    },
    Product_description: {
        type: String,
        required: true
    },
    Seller_name: {
        type: String,
        required: true
    },
    Price: {
        type:String,
        required: true
    }
});

var Product= mongoose.model('Mongoose', productSchema);

module.exports = {Product};