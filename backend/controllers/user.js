const userModel = require("../models/user");
async function getUserById(req, res) {
    try{
      let id = req.id;
      // get user 
      let user = await userModel.findById(id);
      user.salt=undefined;
      user.encry_password=undefined
      //console.log(user);
      res.status(200).json({
        message:"Got user By id !!",
        data : user
      })
    }
    catch(error){
      res.json({
        message:"Failed to get user !!!",
        error
      })
    }
  }
  module.exports.getUserById=getUserById;