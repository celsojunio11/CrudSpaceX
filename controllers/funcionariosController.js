const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json('Texto teste');
});

module.exports = router;