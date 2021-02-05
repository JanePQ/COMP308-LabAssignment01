//this function handles routing of requests
module.exports = function (app) {
    //load the controller(s)
    var index = require('../controllers/index.server.controller');
    var form = require('../controllers/form.server.controller');
    
    //handle the routing of get request to the route
    //by showing the login screen
    app.get('/', function (req, res) {
        //display login page
        res.render('index', { loginMessage: 'Please login' });

    });

        app.post('/', function (req, res, next) {
        //display login page
        res.render('form', { loginMessage: 'Form' });

    });

     //the form uses a post request to the same path ('/')
    // this will only accept the request : https://localhost:3000/thankyou (POST req)
    app.post('/thankyou', function (req, res) {
        //use the controller function
        index.displayInfo(req, res);
        form.formInfo(req, res);
        
    });
};
