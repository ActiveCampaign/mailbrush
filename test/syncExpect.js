/*
  npm run sync
  Syncs test code samples so they use the latest default options.
  Prevents the need to manually update them each time functionality changes.
 */

'use strict';

console.log('Sync code samples');

const fs = require('fs');
const util = require('./util');
const mailbrush = require('../index');

const tests = [
  'bash', 'css', 'markup', 'http', 'javascript', 'json', 'mustachio', 'php'
];

tests.forEach((item) => {
  const file = util.loadFile(`code/${ item }.txt`);
  const opts = { language: item === 'mustachio' ? 'bash' : item };

  mailbrush.convert(file, opts, (html) => {
    util.writeFile(`code/${ item }-expect.txt`, html);
  });

});