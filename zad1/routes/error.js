const express = require('express');
const errorController = require('../controllers/error');

const router = express.Router();

router.use((req, res, next) => {
    errorController.getNotFoundPage(req, res);
});

module.exports = router;
