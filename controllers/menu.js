const Menu = require('../models/menu');

const createMenu = async (req, res) => {
  const { nombre, estado, precio, detalle, categoria } = req.body;
  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    categoria
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Comida nueva agregada`
  })
}

module.exports = {createMenu}