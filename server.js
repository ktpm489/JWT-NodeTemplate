const express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
let Handlers = require('./handlers.js');
function main () {
  let app = express();
  let handlers = new Handlers();
  const port = 8000;
  app.use(bodyParser.urlencoded({
    extend: true
  }));
  app.use(bodyParser.json());
  app.post('/login', handlers.login);
  app.get('/', middleware.checkToken, handlers.index);
  app.listen(port, () => console.log(`Server is listening on port: ${port}`));
}
main();
