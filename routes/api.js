var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:action', function (req, res, next) {

  var action = req.params.action;

  if (action == 'send') { //send an email
    res.json({
      confirmation: 'success',
      action: action
    });
    return;
  }

  res.json({
    confirmation: 'fail',
    action: 'Invalid action'
  });


});

module.exports = router;
