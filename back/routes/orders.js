const express=require("express");
const { newOrder, getOneOrder, myOrders } = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router=express.Router();



router.route("/order/new").post(isAuthenticatedUser, newOrder)
router.route("/order/:id").get(isAuthenticatedUser, getOneOrder)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)

module.exports = router;