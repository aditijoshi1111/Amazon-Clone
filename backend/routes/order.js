const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../controllers/auth");
const {
  addOrders,
  getOrderById,
  getAllOrders,
  ReduceOrder,
  updateOrder,
} = require("../controllers/order");

//Actual routes
//create
router.post("/orders/create/:productId", isAuthenticated, addOrders);
//getById
router.get("/orders/:orderId", isAuthenticated, getOrderById);

//get all orders
router.get("/orders/", isAuthenticated, getAllOrders);

//update order
router.put("/orders/:orderId", isAuthenticated, updateOrder);

//delete
router.delete("/orders/:orderId", isAuthenticated, ReduceOrder);

module.exports = router;
