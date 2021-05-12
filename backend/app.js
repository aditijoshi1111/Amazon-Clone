var express= require("express");
const path=require("path");
var cors=require("cors");
var multer=require("multer");

var app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname,"../frontend/build")));



const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/Products", {useNewUrlParser: true, 
                                                    useUnifiedTopology: true, 
                                                    useCreateIndex:true, 
                                                    useFindAndModify: false})
mongoose.connection.once('open', ()=>{
    console.log("connected to mongodb")
}).on('error', ()=>{
    console.log("error");
})

const ProductSchema= new mongoose.Schema({
    product_name: String,
    image: String,
    description: String,
    seller_name: String
})


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../frontend/src/App.js"));
})
app.post("/postProduct", function(req, res){
    console.log(req.body);
})

app.listen(3001);