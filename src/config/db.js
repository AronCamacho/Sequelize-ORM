
const Sequelize = require('sequelize');
const sequelize = new Sequelize('datos','root','re1234567', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false

 
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.docente = require('../model/model.js')(sequelize, Sequelize);


module.exports = db;
