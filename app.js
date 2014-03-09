
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var swig = require('swig');
var app = express();

// The `consolidate` adapter module  
var cons = require('consolidate');


// all environments
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
// .hbs files should be handled by `handlebars`
// `consolidate` takes care of loading `handlebars` and interfacing it with Express


// we set 'hbs' as the default extension of template files
// this is optional, but you have to specify the view files's extension if you don't
// it defaults to 'jade'

// HandleBar Engine
// app.engine('hbs', cons.handlebars);
// app.set('view engine', 'hbs');


// Swig With Express.js
//app.engine('html', swig.renderFile);
//app.set('view engine', 'html');;
// rename all tempate files as swig instead of html
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');
app.set('view cache', false);
swig.setDefaults({cache:false});


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
