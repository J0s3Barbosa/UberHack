const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DriverSchema = new Schema({
 
  id_Driver: {
    type: Number,
    required : true
  },
  Nome_Completo: {
    type: String,
    required : true
  },
  email: {
    type: String,
  },
  DataNascimento: {
    type: Date,
  },
  Celular: {
    type: String,
  }
  ,
  Cpf: {
    type: String,
  },
  DataDeCadastro: {
    type: Date,
    default: Date.now
  }
  
  
});
module.exports = mongoose.model("Driver", DriverSchema);
 