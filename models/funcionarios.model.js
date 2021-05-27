const mongoose = require('mongoose');

var funcionariosSchema = new mongoose.Schema({
  nome: {
    type: String
  },
  email: {
    type: String
  },
  nacionalidade: {
    type: String
  },
  cidade: {
    type: String
  },
  telefone: {
    type: String
  }

});

mongoose.model('Funcionarios', funcionariosSchema);

