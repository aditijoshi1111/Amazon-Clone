const userModel = require("../models/user");

async function getAllUsers(req, res) {
  try {
    let allUsers = await userModel.find({});
    if (allUsers.length) {
      res.status(200).json({
        message: "Got all users !!",
        data: allUsers,
      });
    } else {
      res.status(200).json({
        message: "No Users found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(req, res) {
  try {
    let id = req.id;
    // get user
    let user = await userModel.findById(id);
    //console.log(user);
    res.status(200).json({
      message: "Got user By id !!",
      data: user,
    });
  } catch (error) {
    res.json({
      message: "Failed to get user !!!",
      error,
    });
  }
}
async function updateUserById(req, res) {
  try {
    let id = req.id;
    let updateObj = req.body;
    let user = await userModel.findById(id);

    for (key in updateObj) {
      user[key] = updateObj[key];
    }

    let updatedUser = await user.save();
    res.status(201).json({
      message: "Updated User",
      data: updatedUser,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to update user",
      error,
    });
  }
}

async function deleteUserById(req, res) {
  try {
    let id = req.id;
    let deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      res.status(200).json({
        message: "User deleted Succesfulyy !!",
        data: deletedUser,
      });
    } else {
      res.status(200).json({
        message: "User not Found !!!",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: "Failed to delete",
      error,
    });
  }
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;
