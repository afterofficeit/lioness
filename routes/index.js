
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'well hello', body: 'test page body field', header: 'header test' });
};

exports.start = function(req, res){
    res.render('start', { title: 'Landing Page', body: 'landing page', header: 'easy pages' });
};