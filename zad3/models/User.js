class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return [
            new User(1, 'user1'),
            new User(2, 'user2'),
            new User(3, 'user3'),
            new User(4, 'user4'),
            new User(5, 'user5')
        ];
    }

    static borrowBook(userId, book) {
        const user = this.getById(userId);
        if (user) {
            user.borrowedBooks.push(book);
        }
    }

    static returnBook(userId, bookId) {
        const user = this.getById(userId);
        if (user) {
            user.borrowedBooks = user.borrowedBooks.filter(book => book.id !== bookId);
        }
    }

    static findBorrowedBookById(userId, bookId) {
        const user = this.getById(userId);
        if (user) {
            return user.borrowedBooks.some(book => book.id === bookId);
        }
        return false;
    }

    static getById(id) {
        return this.getAll().find(user => user.id === id);
    }
}

module.exports = User;
