const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();
const apiRoutes = require('./src/routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(`${__dirname}/client/build`));

app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port);
