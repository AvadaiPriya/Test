const express = require('express');
var dbConn = require('./config/dbConfig');
var dt = require('./myfirstmodule');
var things = require('./myfirstmodule.js');

const port = process.env.PORT || 7000;

const app = express();

app.use('/things', things);

app.get('/', (req, res) => {
  dbConn.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

app.get('/users/:id', function (req, res) {
  dbConn.query('select * from users where id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});