const path = require('path');
const fs = require('fs');
const test = require('ava');
const f = require('../index');
const checkFP = require('./check-fp');

test('it should successfully check path with no logs', t => {
  const CLIpath = path.join(__dirname, 'c.js');
  f(checkFP, CLIpath);
  const checkExistyAndDelete = fs.exists(CLIpath, exists => {
    if (exists) {
      fs.unlinkSync(CLIpath);
    }
  });
  t.pass(checkExistyAndDelete);
});