const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/spaceX', { useNewUrlParser: true }, (err) => {
  if (!err) { console.log('Banco MongoDb conectado com sucesso!') }
  else { console.log('Erro na conexão com o banco MongoDb : ' + err) }
});

require('./funcionarios.model');

