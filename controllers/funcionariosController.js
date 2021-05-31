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
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
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
      res.redirect('funcionariosGrid/list');
    }else{
      if (err.nome == 'ValidationError') {
        handleValidationError(err, req.body);
        res.render("funcionariosGrid/addOrEdit", {
            viewTitle: "Inserir funcionarios",
            funcionarios: req.body
        });
    }
      console.log('Erro durante a inserção : ' + err);
    }
  });
}

function updateRecord(req, res) {
  Funcionarios.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
      if (!err) { res.redirect('funcionariosGrid/list'); }
      else {
          if (err.name == 'ValidationError') {
              handleValidationError(err, req.body);
              res.render("funcionariosGrid/addOrEdit", {
                  viewTitle: 'Update funcionariosGrid',
                  funcionarios: req.body
              });
          }
          else
              console.log('Erro durante atualização : ' + err);
      }
  });
}

  router.get('/list', (req, res) => {
    funcionarios.find((err, docs) => {
      if (!err) {
          res.render("funcionariosGrid/list", {
              list: docs
          });
      }
      else {
          console.log('Erro na lista de funcionarios :' + err);
      }
  });
});

 function handleValidationError(err, body) {
  for (field in err.errors) {
      switch (err.errors[field].path) {
          case 'nome':
              body['nomeError'] = err.errors[field].message;
              break;
          case 'email':
              body['emailError'] = err.errors[field].message;
              break;
          default:
              break;
      }
  }
}

router.get('/:id', (req, res) => {
  funcionarios.findById(req.params.id, (err, doc) => {
      if (!err) {
          res.render("funcionariosGrid/addOrEdit", {
              viewTitle: "Funcionario atualizado",
              funcionarios: doc
          });
      }
  });
});

router.get('/delete/:id', (req, res) => {
  Funcionarios.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
          res.redirect('/employeeGrid/list');
      }
      else { console.log('Erro ao excluir funcionario :' + err); }
  });
});

module.exports = router;