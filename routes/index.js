
/*
 * GET home page.
 */

exports.index = function(req, res){
  var fs = require('fs');
  var newFile = fs.readFile('data/index.json', function(err,fileContent){
    if(err){
      throw err;
    }
    console.log('File Content', fileContent.toString());
  });
  res.render('index', { title: 'well hello', body: 'test page body field', header: 'header test', content:newFile });
};

exports.start = function(req, res){
    res.render('start', { title: 'Landing Page', body: 'landing page', header: 'easy pages' });
};