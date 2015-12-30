app.controller('HomeController', ['$state',
function($state) {

    this.menu = false;

    /**
     * Sets User.email and redirects to game page.
     */
    this.startGame = function() {
        User.email = this.email;
        $state.go('game');
    };
}]);