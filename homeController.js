app.controller('HomeController', ['Entry', '$scope', '$mdDialog', '$mdMedia',
function(Entry, $scope, $mdDialog, $mdMedia) {

    var self = this;

    this.mobileMenu = false;

    this.books = Entry.books;

    this.welcomeForm = true;

    this.newBookEntry = {
        title: '',
        author: '',
        image: Entry.imageUrl()
    };

    this.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    
    /**
     * Sets mobileMenu to true.
     */
    this.showMenu = function() {
        console.log('showmenu');
        self.mobileMenu = true;
        console.log('this.menu', this.menu);
    };

    this.closeCard = function () {
        self.welcomeForm = false;
    };


    this.showDialog = function(ev) {   

        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && self.customFullscreen;
        
        $mdDialog.show({
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: 'views/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            escapeToClose:true,
            fullscreen: useFullScreen
        });
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
          self.customFullscreen = (wantsFullScreen === true);
        });
    };

    this.closeDialog = function() {
        $mdDialog.hide();
    };

    this.addBook = function() {
        console.log('add book called');
        self.books.push(self.newBookEntry);
        self.closeDialog();
    };

}]);