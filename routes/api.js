var express = require('express');
var router = express.Router();
var utils = require('../utils');

router.post('/:action', function (req, res, next) {
  var action = req.params.action;
  if (action == 'send') { // send an email
    var recipients = req.body.recipients; // comma separated list of emails
    var list = recipients.split(',');

    utils.Email.sendEmails(list, req.body, function () {
      res.json({
        confirmation: 'success',
        message: 'Emails sent!'
      });
    });
    return;
  }
  res.json({
    confirmation: 'fail',
    action: 'Invalid action'
  });
});

module.exports = router;
