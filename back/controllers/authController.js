const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

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

    res.status(201).json({
        success:true,
        user
    })
})