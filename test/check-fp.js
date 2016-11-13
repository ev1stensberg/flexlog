const fs = require('fs');

module.exports = a => {
  try {
    fs.statSync(a.toString());
  } catch (err) {
    console.log(a, ' does not exist');
    console.log('We\'ve created the file for you');
    fs.writeFileSync(a.toString(), '// Webpack Entry Point', err => {
      console.error('Error Creating File: ', a);
    });
  }
};