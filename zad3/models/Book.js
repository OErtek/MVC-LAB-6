class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return [
            new Book(1, 'Book 1', 'Author 1', 2000),
            new Book(2, 'Book 2', 'Author 2', 2005),
            new Book(3, 'Book 3', 'Author 3', 2010),
            new Book(4, 'Book 4', 'Author 4', 2015),
            new Book(5, 'Book 5', 'Author 5', 2020)
        ];
    }

    static getById(id) {
        return this.getAll().find(book => book.id === id);
    }

    borrow() {
        this.available = false;
    }

    return() {
        this.available = true;
    }
}

module.exports = Book;
