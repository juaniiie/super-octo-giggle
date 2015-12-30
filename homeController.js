app.controller('HomeController', ['Entry', '$scope', '$mdDialog', '$mdMedia',
function(Entry, $scope, $mdDialog, $mdMedia) {

    var self = this;

    this.mobileMenu = false;

    this.icon = true;

    this.books = Entry.books;

    this.welcomeForm = true;

    this.newBookEntry = {
        title: '',
        author: '',
        image: Entry.imageUrl()
    };

    this.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    this.useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && self.customFullscreen;
    
    /**
     * Sets mobileMenu to true.
     */
    this.showHideMenu = function() {
        self.icon = !self.icon;
        self.mobileMenu = !self.mobileMenu;
    };

    this.closeCard = function () {
        self.welcomeForm = false;
    };

    this.showDialog = function(ev) {   
        
        $mdDialog.show({
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: 'views/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            escapeToClose:true,
            fullscreen: self.useFullScreen
        });
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
          self.customFullscreen = (wantsFullScreen === true);
        });
    };

    this.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title('Watch out!')
                .textContent('This book is already saved!')
                .ariaLabel('Alert Dialog')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };

    this.closeDialog = function() {
        $mdDialog.hide();
    };

    this.addBook = function() {
        if(Entry.isBookRead(self.newBookEntry)) {
            self.closeDialog();
            self.showAlert();
        } else {
            self.books.push(self.newBookEntry);  
            self.closeDialog();
        }
    };

}]);