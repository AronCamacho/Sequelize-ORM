var express = require('express');
var app = express();
const path=require('path');
const morgan=require('morgan');
var bodyParser = require('body-parser');


const db = require('./config/db.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('[ ]');
});
require('./routes/docente.route.js')(app);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
// Create a Server
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("servidor iniciado en puerto:", host, port)
}) ;
