//This function handles the following task:
//captures the form input and passes it to display.ejs page for friendly output
exports.displayInfo = function (req, res) {

    //get user input using request object
    var username = req.body.username;
    var comments = req.body.comments;
    //make a reference to the session object
    var session = req.session;
    //store the username in session object
    session.username = username;
    console.log("username in session: " + session.username);
    //show the display.ejs page and pass username to it
    res.render('display', {
        username: username,
        //comments:"Welcome to the Course!",
        comments: comments
    });   

}; //end of function
