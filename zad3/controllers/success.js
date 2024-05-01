const getSuccessPage = (req, res) => {
    res.render('success', { title: 'Success', message: 'Operation completed successfully' });
};

module.exports = { getSuccessPage };
