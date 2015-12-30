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

    this.useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && self.customFullscreen;
    
    /**
     * Toggles mobile toolbar icon
     * Toggles between mobile and web book list
     */
    this.showHideMenu = function() {
        self.icon = !self.icon;
        self.mobileMenu = !self.mobileMenu;
    };

    /**
     * Hides welcome card
     */
    this.closeCard = function () {
        self.welcomeForm = false;
    };

    /**
     * Shows book entry form in lightbox for web
     * Shows entry form full-screen for mobile
     */
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

    /**
     * Shows alert dialog when duplicate book is entered
     */
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

    /**
     * Closes dialog
     */
    this.closeDialog = function() {
        $mdDialog.hide();
    };

    /**
     * If book in not in books array, adds book
     * else calls showAlert function
     */
    this.addBook = function() {
        if (Entry.isBookRead(self.newBookEntry)) {
            self.closeDialog();
            self.showAlert();
        } else {
            self.books.push(self.newBookEntry);  
            self.closeDialog();
        }
    };

}]);
