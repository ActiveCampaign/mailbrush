const fs = require('fs');
const extend = require('extend');
const inlineCss = require('inline-css');
const prism = require('prismjs');
const mergeStyles = require('./mergestyles');

// Load prismJS language components
[
  'markup',
  'markup-templating',
  'bash',
  'css',
  'http',
  'javascript',
  'json',
  'php'
].forEach(function(language) {
  require(`prismjs/components/prism-${ language }`)
});

exports.convert = (code, options, callback) => {
  if (code === '' || typeof code == 'undefined') {
    throw('Did not specify code snippet.');
  }

  // Merge user defined options with defaults
  const opts = extend({
    language: 'markup',
    cssOptions: {}
  }, options);

  // Generate HTML code snippet with prism
  const prismHtml = prism.highlight(code, prism.languages[opts.language]);

  // Wrap HTML snippet
  const wrappedHtml = `<table class="wrapper" cellpadding="0" cellspacing="0"><tr><td><pre>${ prismHtml }</pre></td></tr></table>`;

  // Inline CSS
  inlineCss(wrappedHtml, {
    extraCss: mergeStyles.compile(opts.cssOptions),
    url: '/themes/default.css',
    removeHtmlSelectors: true,
    applyWidthAttributes: true
  }).then(function(html) {

    if (callback) return callback(html);

  });

};
