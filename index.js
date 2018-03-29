const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

app.use(cors());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`app listens on port ${port}`)
});