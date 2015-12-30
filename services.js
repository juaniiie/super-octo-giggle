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

    var isBookRead = function(bookEntry) {
        for(var i = 0; i < books.length; i++) {
            if(books[i].title === bookEntry.title && books[i].author === bookEntry.author) {
                return true;
            }
        }
        return false;
    };

    return {
        imageUrl: imageUrl,
        books: books,
        isBookRead: isBookRead
    };
});