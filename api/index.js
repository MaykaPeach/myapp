const apiBooks = require('./books.js');
module.exports = function(app) {
    apiBooks(app);
    // other routes
};