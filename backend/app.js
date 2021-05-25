const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// app.use(express.static(path.join(__dirname, "../frontend/build")));
//My Routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const emailRoutes = require("./routes/email");
//DB connection

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
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// my middlewares
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", emailRoutes);
// app.get("/", function(req,res){
//     res.sendFile(path.join(__dirname,"../frontend/src/App.js"));
// })

const port = 8000;
//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
