
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.status(404).render('not-found', { title: '404 - Page Not Found' });
});

module.exports = router;
