let jwt = require('jsonwebtoken');
let config = require('./config');
module.exports = class HandlerGenerator {
  login (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // TODO call db to get username, password
    let mockedUsername = 'admin';
    let mockedPassword = 'password';
    if (username && password) {
      if (username === mockedUsername && password === mockedPassword) {
        let token = jwt.sign({username, password},
          config.secret,
          {
            expiresIn: '24h'
          }
        );
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
};
