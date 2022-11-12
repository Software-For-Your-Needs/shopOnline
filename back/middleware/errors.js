const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })
    // Error de clave duplicada en mongoose
    if (err.code === 11000){
        const message = `Clave duplicada ${Object.keys(err.keyValue)}`
        error=new ErrorHandler(message, 400)
    }
    // Errores en JWT
    if (err.name==="JsonWebTokenError"){
        const message = "Token de Json Web es invalido, intentelo de nuevo"
        error = new ErrorHandler(message, 400)
    
    }

    //jwt token expirado
    if (err.name==="TokenExpireError"){
        const message= "El token en JWT es vencido. Y expiró. Intentelo de nuevo"
        error = new ErrorHandler(message, 400)
    }
}