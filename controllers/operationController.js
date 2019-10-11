const controller = {};

//importation du modele
let OperationModel = require('../models/operation');

var Operation = OperationModel.Operation;

controller.index = (req, res) => {
    Operation.findAll().then(items=> {
        res.render('./views/index.ejs', {
            calculs: items,
            title: 'Accueil'

        });
});
};

module.exports = controller;