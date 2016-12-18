const fs = require('fs');
const path = require('path');

exports.loadFile = function(file) {
  return fs.readFileSync(path.join(__dirname, file), 'utf8');
};

exports.writeFile = function(file, contents) {
  return fs.writeFileSync(path.join(__dirname, file), contents, 'utf8');
};