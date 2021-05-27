const mongoose = require('mongoose');

mongoose.connect('mongo://localhost:27017/spaceX', { userNewUrl: true }, (err) => {
  if (!err) { console.log('Banco MongoDb conectado com sucesso!') }
  else { console.log('Erro na conexão com o banco MongoDb : ' + err) }
});

require('./funcionarios.model');

