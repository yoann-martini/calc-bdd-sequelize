var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/calcbdd');


const Operation = sequelize.define('operation', {
    //attributes
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    chiffre1: {
        type:Sequelize.FLOAT,
        allowNull:false,
    },
    chiffre2: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
    operateur: {
        type: Sequelize.STRING,
        allowNull:false,
        // allowNull defaults to true
    },
    resultat: {
        type: Sequelize.FLOAT,
        allowNull:false,
        // allowNull defaults to true
    },
    statut: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false
        // allowNull defaults to true
    }
}, {sequelize, tableName:"operation",timestamps: false});

var exports = module.exports = {};
exports.Operation = Operation;



