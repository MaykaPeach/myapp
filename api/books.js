// api/books.js
module.exports = function(app) {
    app.get('/books', (req, res) => {
        res.send('Response')
    });
};