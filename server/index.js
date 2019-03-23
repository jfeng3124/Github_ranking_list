const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const find = require('../database/index.js').find;
const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.term, (err, res, body)=> {
    if (err) throw (err);
    save(JSON.parse(body));
  });
  res.status(201);
});

app.get('/repos', function (req, res) {
  find((result) => {res.send(result)})
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

