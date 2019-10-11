var express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// importing routes
const operationRoutes = require('./routes/operation');

app.set('view engine', 'ejs');

app.use('/operation', operationRoutes);

// settings
app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



//server.listen(8081);





