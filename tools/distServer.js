import express from 'express';
import path from 'path';
import open from 'open';
import colors from 'colors';

/* eslint-disable no-console */

const port = 3000;
const app = express();

console.log('Serving...'.green);

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err.red);
  } else {
    console.log('Served'.green);
    open(`http://localhost:${port}`);
  }
});
