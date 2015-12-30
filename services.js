app.factory('Menu', 
function() {


    /**
     * 
     * 
     * 
     **/
  

    return {
       
    };
});

app.factory('Entry', 
function() {
    
    var imageUrl = function() {
        var number = function() {
            return Math.floor(Math.random()*5) + 1;
        };
        return 'assets/cat' + number() + '.jpg';
    };

    var books = [
        {
            title: 'El Pooch',
            author: 'Alex Nelson',
            image: imageUrl()
        },
        {
            title: 'The Flight',
            author: 'Scott Masterson',
            image: imageUrl()
        },
        {
            title: 'El Gato',
            author: 'Allen Chen',
            image: imageUrl()
        },
        {
            title: 'The Ordeal',
            author: 'Bece Ra',
            image: imageUrl()
        }
    ];


    return {
        imageUrl: imageUrl,
        books: books
    };
});