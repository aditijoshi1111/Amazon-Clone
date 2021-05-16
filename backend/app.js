var express= require("express");
const path=require("path");
const mongoose=require("mongoose");

var app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"../frontend/build")));

mongoose
  .connect(
    "mongodb+srv://db:NpSYtogd2B5MNzRD@cluster0.4vsw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTED");
  });


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../frontend/src/App.js"));
})
app.post("/postProduct", function(req, res){
    console.log(req.body);
})

app.listen(3001);