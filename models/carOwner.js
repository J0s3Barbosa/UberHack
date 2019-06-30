const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CarOwnerSchema = new Schema({
  
  Nome: {
    type: String,
    required : true
  },
  Email: {
    type: String,
  },
  Telefone: {
    type: String,
  },
  Cpf: {
    type: String,
  },
  Marca: {
    type: String,
  },
  Modelo: {
    type: String,
  },
  AnoDeFabricacao: {
    type: String,
  },
  FotoDoDocumento: {
    type: String,
  },
  Endereco: {
    type: String,
  },
  FotoDoCliente: {
    type: String,
  },
  DataDeCadastro: {
    type: Date,
    default: Date.now
  },
  NumeroCarteira: {
    type: String,
  }
});
module.exports = mongoose.model("CarOwner", CarOwnerSchema);
 