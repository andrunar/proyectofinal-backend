const Pedido = require('../models/pedido');

const createPedido = async (req, res) => {
  const { usuario, fecha, menu, estado } = req.body;
  const nuevoPedido = new Pedido({
    usuario,
    fecha,
    menu,
    estado
  })

  await nuevoPedido.save()

  res.json({
    mensaje: `Pedido enviado`
  })
}

module.exports = {createPedido}