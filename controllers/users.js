const User = require('../models/users')

const createUser = async (req, res) => {
  const { nombre, email, password, estado, rol } = req.body;
  const nuevoUsuario = new User({
    nombre,
    email,
    password,
    estado,
    rol
  })

  await nuevoUsuario.save()

  res.json({
    mensaje: `Usuario ${nombre} creado con exito`
  })
}

module.exports = {createUser}