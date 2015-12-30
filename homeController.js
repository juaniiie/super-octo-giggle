app.controller('HomeController', ['Entry',
function(Entry) {

    this.menu = false;

    this.books = Entry.books;

    this.form = true;

    /**
     * Sets menu to true.
     */
    this.showMenu = function() {
        console.log('showmenu');
        this.menu = true;
        console.log('this.menu', this.menu);
    };
}]);