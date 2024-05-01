const Book = require('../models/Book');
const User = require('../models/User');

const getBooksList = (req, res) => {
    const userId = req.session.userId;
    const books = Book.getAll();
    res.render('books', { title: 'Books', userId, books });
};

const getBookDetails = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getById(bookId);
    const didUserBorrowTheBook = User.findBorrowedBookById(userId, bookId);
    res.render('book-details', { title: `${book.title} by ${book.author}`, book, didUserBorrowTheBook });
};

const postBookBorrow = (req, res) => {
    const bookId = req.params.id;
    const userId = req.session.userId;
    const book = Book.getById(bookId);
    if (!book || !userId) {
        res.redirect('/books');
        return;
    }
    if (!book.available) {
        res.redirect('/books');
        return;
    }
    book.borrow();
    User.borrowBook(userId, book);
    res.redirect('/books/borrow/success');
};

const postBookReturn = (req, res) => {
    const bookId = req.params.id;
    const userId = req.session.userId;
    const book = Book.getById(bookId);
    if (!book || !userId) {
        res.redirect('/books');
        return;
    }
    if (book.available) {
        res.redirect('/books');
        return;
    }
    book.return();
    User.returnBook(userId, bookId);
    res.redirect('/books/return/success');
};

const getBookBorrowSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book borrowed successfully' });
};

const getBookReturnSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book returned successfully' });
};

module.exports = { getBooksList, getBookDetails, postBookBorrow, postBookReturn, getBookBorrowSuccess, getBookReturnSuccess };
