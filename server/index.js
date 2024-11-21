const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this is the dash bashbord');
});

app.listen(3002, () => {
  console.log('listening on port 3002');
});
