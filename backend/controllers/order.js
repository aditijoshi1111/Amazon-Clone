const orderModel = require("../models/order");
const userModel = require("../models/user");
const Product = require("../models/products");

async function addOrders(req, res) {
  let user = await userModel.findById(req.id);

  const product = await Product.findById(req.params.productId);
  let count = req.body.count;

  let order = await new orderModel();
  order.count = count;
  order.product = req.params.productId;

  order.save(async (err, order) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save your order in DB",
      });
    }
    let user = await userModel.findById(req.id);
    user.purchases.push(order);
    await user.save();
    return res.status(200).json({
      message: "Order added successfully in cart of user",
      order: order,
    });
  });
}

async function getOrderById(req, res) {
  try {
    const order = await orderModel
      .findById(req.params.orderId)
      .populate("product", "Product_name Price");
    res.status(201).json({
      message: "order get successfully!",
      data: order,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to get order by id",
      error,
    });
  }
}
async function getAllOrders(req, res) {
  try {
    const orders = await userModel
      .findById(req.id)
      .populate("product", "Product_name Price");
    res.status(201).json({
      message: "All orders get successfully",
      data: orders.purchases,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to get all orders",
      error,
    });
  }
}
async function updateOrder(req, res) {
  try {
    const updateObj = req.body;
    let order = await orderModel.findById(req.params.orderId);
    for (key in updateObj) {
      order[key] = updateObj[key];
    }

    order = await order.save();
    res.status(201).json({
      message: "order updated successfully",
      data: order,
    });
  } catch (error) {
    res.status(501).json({
      message: "Failed to update order",
      error,
    });
  }
}
async function ReduceOrder(req, res) {
  try {
    let order = await orderModel.findById(req.params.orderId);
    if (order.count == 1) {
      order = await orderModel.findByIdAndDelete(req.params.orderId);
      res.status(201).json({
        message: "order deleted successfully",
        data: order,
      });
    } else {
      order.count = order.count - 1;
      order = await order.save();
      res.status(201).json({
        message: "order updated successfully",
        data: order,
      });
    }
  } catch (error) {
    res.status(501).json({
      message: "Failed to delete order",
      error,
    });
  }
}
module.exports.addOrders = addOrders;
module.exports.getOrderById = getOrderById;
module.exports.getAllOrders = getAllOrders;
module.exports.updateOrder = updateOrder;
module.exports.ReduceOrder = ReduceOrder;
