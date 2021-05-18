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
    },
    filename: String
});

module.exports = Product = mongoose.model('Product', productSchema);