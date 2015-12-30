app.factory('Menu', 
function() {

    var email = '';

    /**
     * Updates current user email.
     * submittedEmail - String of new user email.
     * Returns User email.
     **/
    var getCurrentUser = function(submittedEmail) {
        email = submittedEmail;
        return email;
    };

    return {
        email: email,
        getCurrentUser: getCurrentUser,
    };
});