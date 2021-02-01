const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('GET route on things.');
});
router.get('/:id([0-9]{5})', function (req, res) {
  res.send('Given Url id is '+req.params.id);
});

exports.myDateTime = function () {
    return Date();
};
  
module.exports = router;
  