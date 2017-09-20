var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/zoneController');

router.get('/:resource', function(req, res, next) {
  var resource = req.params.resource;

  if (resource == 'zone') {
    zoneController.find(req.query, function(err, results) {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err
        });
        return;
      }

      res.json({
        confirmation: 'success',
        results: results
      });
    });
  }

  // res.json({
  //   confirmation: 'success',
  //   resource: resource
  // });
});

module.exports = router;
