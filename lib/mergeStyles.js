'use strict';

const extend = require('extend');
const postcss = require('postcss');
const postcssvariables = require('postcss-inject-css-variables');
const postcssnext = require('postcss-cssnext');
const fs = require('fs');

const defaultTheme = fs.readFileSync('./themes/default.css', 'utf8');

exports.compile = function(options) {

  const opts = extend({
    width: '600px',
    backgroundColor: '#f5f2f0',
    padding: '10px 15px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '13px',
    lineHeight: '1.5',
    tabSize: '2',
    fontColorBase: '#000',
    fontColorComments: 'slategray',
    fontColorPunctuation: '#999',
    fontColorTags: '#905',
    fontColorStrings: '#690',
    fontColorOperators: '#a67f59',
    fontColorKeywords: '#07a',
    fontColorFunctions: '#DD4A68',
    fontColorImportant: '#e90'
  }, options);

  return postcss([ postcssvariables(opts), postcssnext() ]).process(defaultTheme).css;

};
