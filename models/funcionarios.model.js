const mongoose = require('mongoose');

var funcionariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: 'Campo obrigatório.'
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

funcionariosSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'E-mail inválido.');

mongoose.model('Funcionarios', funcionariosSchema);

