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

    var number = function() {
        return Math.floor(Math.random()*5) + 1;
    };

    var books = [
        {
            title: 'El Pooch',
            author: 'Alex Nelson',
            image: 'assets/cat' + number() + '.jpg'
        },
        {
            title: 'The Flight',
            author: 'Scott Masterson',
            image: 'assets/cat' + number() + '.jpg'
        },
        {
            title: 'El Pooch',
            author: 'Alex Nelson',
            image: 'assets/cat' + number() + '.jpg'
        },
        {
            title: 'The Flight',
            author: 'Scott Masterson',
            image: 'assets/cat' + number() + '.jpg'
        }
    ];

    return {
        books: books
    };
});