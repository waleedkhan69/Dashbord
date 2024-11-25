const express = require('express');
const app = express();
const cors = require('cors');
require('./DB/config');
const User = require('./DB/User');
app.use(express.json());
app.use(cors());
app.post('/signin', async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});
app.get('/', (req, res) => {
  res.send('the backend project is working fine it working');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
