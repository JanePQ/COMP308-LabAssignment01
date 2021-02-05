//This function handles the following task:
//captures the form input and passes it to display.ejs page for friendly output
exports.formInfo = function (req, res) {

    //get user input using request object
    var comments = req.body.comments;
    //make a reference to the session object
    var session = req.session;
    //store the username in session object
    session.comments = comments;
    console.log("message in session: " + session.comments);
    //show the display.ejs page and pass username to it
    res.render('display', {
        comments: comments
    });   

}; //end of function