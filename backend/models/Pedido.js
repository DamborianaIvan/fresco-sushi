const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precio: { type: Number, required: true }
    }
  ],
  total: { type: Number, required: true },
  estado: { type: String, enum: ['pendiente', 'en preparación', 'en reparto', 'entregado'], default: 'pendiente' },
  fechaPedido: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
