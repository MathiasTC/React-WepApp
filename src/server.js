import express from 'express';

const app = express();

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

app.get('/data', function(req, res) {
    res.send('Here you can GET data')
})