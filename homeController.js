app.controller('HomeController', ['$state',
function($state) {

    this.menu = false;

    /**
     * Sets User.email and redirects to game page.
     */
    this.showMenu = function() {
        console.log('showmenu');
        this.menu = true;
        console.log('this.menu', this.menu);
    };
}]);