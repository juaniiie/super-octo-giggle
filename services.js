app.factory('Entry', 
function() {
    
    var imageUrl = function() {
        var randNumber = function() {
            return Math.floor(Math.random() * 5) + 1;
        };

        return 'assets/cat' + randNumber() + '.jpg';
    };

    var books = [
        {
            title: 'El Pooch',
            author: 'Alex Nelson',
            image: imageUrl()
        }, {
            title: 'The Flight',
            author: 'Scott Masterson',
            image: imageUrl()
        }, {
            title: 'El Gato',
            author: 'Allen Chen',
            image: imageUrl()
        }, {
            title: 'The Ordeal',
            author: 'Bece Ra',
            image: imageUrl()
        }
    ];

    var isBookRead = function(bookEntry) {
        for (var i = 0; i < books.length; i++) {
            if (books[i].title.toLowerCase() === bookEntry.title.toLowerCase() &&
                books[i].author.toLowerCase() === bookEntry.author.toLowerCase()) {
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