const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"ANd9GcQKZwmqodcPdQUDRt6E5cPERZDWaqy6ITohlQ&usqp",
            url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e1ae83e-cf8b-44d0-b902-e0e53e219584/d5dy73n-857ab4b2-8cfa-4c08-92a6-8989e286ee2f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllMWFlODNlLWNmOGItNDRkMC1iOTAyLWUwZTUzZTIxOTU4NFwvZDVkeTczbi04NTdhYjRiMi04Y2ZhLTRjMDgtOTJhNi04OTg5ZTI4NmVlMmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EsnJ3dKZhs6yJwi8js_NlsbekIYdOf87e44Y9sU4LnA"
        }
    })
    tokenEnviado(user, 201, res)
})

// Iniciar Sesión
exports.loginUser = catchAsyncErrors( async(req, res, next)=>{
    const {email, password} = req.body;

    // Revisar si los campos están completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email y contraseña", 400))

    }
    // Buscar usuario en BD
    const user = await User.findOne({email}).select("+password")

    if (!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }
    // Comparar contraseña
    const contrasenaOK = await user.compararPass(password)

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña inválida", 401))
    }
    tokenEnviado(user, 200, res)

})
// Cerrar sesión
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token",null, {
         expires: new Date(Date.now()),
         httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: "Cerró sesión"
    })
})

//Olvidé mi contraseña, recuperar
exports.forgotPassword = catchAsyncErrors ( async( req, res, next) =>{
    const user= await User.findOne({email: req.body.email});

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken= user.genResetPasswordToken();
    
    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje=`Hola!\n\nTu link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n Att:\nShopOnline Store`

    try{
        await sendEmail({
            email:user.email,
            subject: "ShopOnline Recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success:true,
            message: `Correo enviado a: ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }
})
// Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async(req, res, next)=>{
    //Hash el token que llegó con la url
    const  resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos al usuario al que le vamos a resetear la contraseña.
    const user=await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}

    })// El usuario si está en base de datos
    if (!user){
        return next(new ErrorHandler("El token es invalido o ya expiró", 400))

    }
    if (req.body.password != req.body.confirmPassword){
        return next(new ErrorHandler("Contraseñas no coinciden", 400))
    }

    //Setear nueva contraseña
    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})
// Ver perfil de usuario (Usuario logueado)
exports.getUserProfile=catchAsyncErrors(async(req, res, next)=>{
    const user=await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})
