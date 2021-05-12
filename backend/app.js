var express= require("express");
const path=require("path");
var cors=require("cors");

var app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
ap.use(cors());
app.use(express.static(path.join(__dirname,"../frontend/src/build")));



const mongoose=require("mongoose");
const { fileURLToPath } = require("url");
mongoose.connect("mongodb://localhost/Products", {useNewUrlParser: true, 
                                                    useUnifiedTopology: true, 
                                                    useCreateIndex:true, 
                                                    useFindAndModify: false})
mongoose.connection.once('open', ()=>{
    console.log("connected to mongodb")
}).on('error', ()=>{
    console.log("error");
})

const ProductSchema= new Mogoose.Schema({
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