const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up on PORT : ${PORT}`);
});

app.get('/on', (req, res) => {
  res.send("I'm turned on");
});

app.get('/off', (req, res) => {
  res.send("I'm turned off");
});
