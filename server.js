const express = require('express');

const app = express();

app.listen(process.env.PORT || 3000, () =>
  console.log('App listening on deviiantwebserver.heroku.com & port 3000!'),
);

app.get('/', function(req, res) {
    res.send('This is the root route')
})

app.get('/data', function(req, res) {
    res.send('Here you can GET data')
})