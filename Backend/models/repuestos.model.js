const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepuestosSchema = new Schema({
  codigo: { type: String, require: true, max: 60 },
 repuesto_bc: { type: String, require: true, max: 40 },
  precio: { type: String, require: true, max: 40 },

});

module.exports = mongoose.model("repuestos", RepuestosSchema);