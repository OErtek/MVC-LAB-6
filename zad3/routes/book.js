const express = require('express');
const bookController = require('../controllers/book');

const router = express.Router();

router.get('/', bookController.getBooksList);
router.get('/:id', bookController.getBookDetails);
router.post('/borrow/:id', bookController.postBookBorrow);
router.post('/return/:id', bookController.postBookReturn);
router.get('/borrow/success', bookController.getBookBorrowSuccess);
router.get('/return/success', bookController.getBookReturnSuccess);

module.exports = router;
