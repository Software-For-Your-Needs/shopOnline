const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

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