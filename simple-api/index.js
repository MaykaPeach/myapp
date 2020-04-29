const express = require('express');
const app = express();
// register endpoint
require('/Users/majadolmatova/myapp/api/index.js')(app);
//app.get('/', function (req, res) {
 // res.send('root');
//});
app.listen(3333, () => {
    console.log('server started!');
});