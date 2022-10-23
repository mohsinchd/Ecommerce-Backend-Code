const express = require("express");
const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControllers");
const { isAuthenticated, isAdmin } = require("../middlewares/auth");

const router = express.Router();

router.route("/order/new").post(isAuthenticated, createOrder);
router.route("/order/:id").get(isAuthenticated, getSingleOrder);
router.route("/orders/me").get(isAuthenticated, myOrders);
router
  .route("/admin/orders")
  .get(isAuthenticated, isAdmin("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticated, isAdmin("admin"), updateOrder)
  .delete(isAuthenticated, isAdmin("admin"), deleteOrder);

module.exports = router;
