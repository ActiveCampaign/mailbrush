'use strict';

const assert = require('assert');
const loadFile = require('./util').loadFile;
const extend = require('extend');
const mailbrush = require('../index');


describe('MailBrush', () => {

  // JSON
  describe('Highlight JSON', () => {
    const expectedFile = loadFile('code/json-expect.txt');
    const code = loadFile('code/json.txt');
    const opts = { language: 'json' };

    it('it should return highlighted JSON', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // HTML
  describe('Highlight Markup', () => {
    const expectedFile = loadFile('code/markup-expect.txt');
    const code = loadFile('code/markup.txt');
    const opts = { language: 'markup' };

    it('it should return highlighted markup', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // Javascript
  describe('Highlight Javascript', () => {
    const expectedFile = loadFile('code/javascript-expect.txt');
    const code = loadFile('code/javascript.txt');
    const opts = { language: 'javascript' };

    it('it should return highlighted Javascript', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // CSS
  describe('Highlight CSS', () => {
    const expectedFile = loadFile('code/css-expect.txt');
    const code = loadFile('code/css.txt');
    const opts = { language: 'css' };

    it('it should return highlighted CSS', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // PHP
  describe('Highlight PHP', () => {
    const expectedFile = loadFile('code/php-expect.txt');
    const code = loadFile('code/php.txt');
    const opts = { language: 'php' };

    it('it should return highlighted PHP', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // CSS options
  describe('Handle CSS Options', () => {
    const cssOptionsPath = 'code/css-options/';
    const code = loadFile('code/json.txt');
    const opts = { language: 'json' };

    it('it should set tab size', () => {
      const expectedFile = loadFile(`${ cssOptionsPath }tab-size.txt`);
      const newOpts = extend({ cssOptions: { tabSize: '20' }}, opts);

      mailbrush.convert(code, newOpts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });

    it('it should set line height', () => {
      const expectedFile = loadFile(`${ cssOptionsPath }line-height.txt`);
      const newOpts = extend({ cssOptions: { lineHeight: '5' }}, opts);

      mailbrush.convert(code, newOpts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });

    it('it should set comic sans', () => {
      const expectedFile = loadFile(`${ cssOptionsPath }font-family.txt`);
      const newOpts = extend({ cssOptions: { fontFamily: '"Comic Sans MS"' }}, opts);

      mailbrush.convert(code, newOpts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });

    it('it should set syntax colors', () => {
      const expectedFile = loadFile(`${ cssOptionsPath }colors.txt`);
      const newOpts = extend({ cssOptions: {
        fontColorBase: '#FF0',
        fontColorStrings: '#999'
      }}, opts);

      mailbrush.convert(code, newOpts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });


  // Mustachio
  describe('Highlight Bash with Mustachio', () => {
    const expectedFile = loadFile('code/mustachio-expect.txt');
    const code = loadFile('code/mustachio.txt');
    const opts = { language: 'bash' };

    it('it should return highlighted bash with mustachio', () => {
      mailbrush.convert(code, opts, (converted) => {
        assert.equal(converted, expectedFile);
      });
    });
  });

});
