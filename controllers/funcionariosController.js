const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Funcionarios = mongoose.model('Funcionarios');


router.get('/', (req, res) => {
  res.render("funcionariosGrid/addOrEdit", {
    viewTitle : "Inserir Funcionários da SpaceX"
  });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res) {
  var funcionarios = new Funcionarios();
  funcionarios.nome = req.body.nome;
  funcionarios.email = req.body.email;
  funcionarios.nacionalidade = req.body.nacionalidade;
  funcionarios.cidade = req.body.cidade;
  funcionarios.telefone = req.body.telefone;
  funcionarios.save((err, doc) => {
    if (!err) {
      res.redirect('funcionarios/list');
    }else{
      console.log('Erro durante a inserção : ' + err);
    }
  });
}

router.get('/list', (req, res) => {
    res.json('from list');
 });

module.exports = router;