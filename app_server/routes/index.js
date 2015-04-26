
/*
 * GET home page.
 */

/*
var express = require('express');
var ctrlMain = require('../controllers/main');
var router = express.Router();
var path = require('path');
var http = require('http');
var app = express();
router.use = (app.router)
router.set('controller', path.join(__dirname, 'controllers'));


router.get('/', ctrlMain.index);
*/

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
/*
module.exports = router;*/
