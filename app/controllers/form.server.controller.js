//This function handles the following task:
//captures the form input and passes it to display.ejs page for friendly output
exports.formInfo = function (req, res) {

    //get user input using request object
    var message = req.body.message;
    //make a reference to the session object
    var session = req.session;
    //store the username in session object
    session.message = message;
    console.log("message in session: " + session.message);
    //show the display.ejs page and pass username to it
    res.render('form', {
        message: message
    });   

}; //end of function