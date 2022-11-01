const User = require ("../models/auth")
const jwt= require("jsonwebtoken")
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")

//Verificamos autenticado
exports.isAuthenticatedUser=catchAsyncErrors(async(req, res, next)=>{
    const {token}=req.cookies

    if(!token){
        return next(new ErrorHandler("Debe iniciar sesión para acceder al recurso", 401))

    }

    const decodificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodificada.id);

    next()
})
//Capturar rol
exports.authorizeRoles(...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){

            return next(new ErrorHandler(`Role (${req.user.role}) no está autorizado a ingresar a esta área`, 401))
        }
        next()
    }
}