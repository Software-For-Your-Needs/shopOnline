const Order=require("../models/order")
const Product=require("../models/productos")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")

// Crear una orden
exports.newOrder= catchAsyncErrors(async(req, res, next)=>{
    const {
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    const order=await Order.create({
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        fechaPago: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success: true,
        order
    })
})