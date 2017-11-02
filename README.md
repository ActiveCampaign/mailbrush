<img src="http://assets.wildbit.com/wildbit/repos/mailbrush/mailbrush-logo@2x.png" alt="MailBrush" width="148" height="148" align="right">

# MailBrush – Syntax highlighting for email templates
> Brought to you by <a href="http://postmarkapp.com"><img src="http://assets.wildbit.com/postmark/misc/postmark.svg" alt="Postmark" style="vertical-align: -3px;"></a>

[![Build Status](https://travis-ci.org/wildbit/mailbrush.svg?branch=master)](https://travis-ci.org/wildbit/mailbrush)

MailBrush lets you add syntax highlighting to code snippets so they can be used in your email templates.

**Instead of plain ol’ snippets in your email templates that look like this:**
<pre>{
  "key": "value",
  "key2": "value 2"
}</pre>

**Your snippets will now look like this:**<br>
![MailBrush Syntax Highlighting](/media/snippet.png?raw=true "MailBrush Syntax Highlighting")

## Features

* Supports HTML, CSS, Javascript, JSON, PHP, HTTP, and bash syntax highlighting
* Full customization of colors and styles 🎨
* Generates ready to use HTML snippets that have been tested in [all major email clients](https://litmus.com/pub/11f04d0):
    * Desktop
        * Apple Mail 8, 9, 10
        * Outlook 2003, 2007, 2010, 2011, 2013, 2016
        * Windows 10 Mail
    * Mobile
        * Gmail App (Android)
        * iPhones
        * iPads
    * Web
        * AOL
        * Gmail
        * Outlook.com
        * Yahoo


## Install
```
npm install mailbrush --save
```

## Usage

```javascript
const mailbrush = require('mailbrush');

// Specify options
const options = {
  language: 'json',
  cssOptions: {
    backgroundColor: 'pink'
  }
};

// The code snippet you want to beautify
const snippet = `{
   "key": "value",
   "key2": "value 2"
}`

// Make some rainbows
mailbrush.convert(snippet, options, (html) => {
  // Returns HTML with inlined CSS for email client compatibility
  console.log(html);
});
```

## API

### `mailbrush.convert( snippet, [options], [callback] )`

#### snippet
Type: `string`

The code snippet to add syntax highlighting to.

#### options
Type: `object`<br>
Default:
```javascript
{
  language: 'markup', // The language of your code snippet. Supports markup, CSS, Javascript, JSON, PHP, HTTP, and bash.
  cssOptions: {
    backgroundColor: '#f5f2f0',
    padding: '10px 15px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '12px',
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
  }
}
```

#### callback( HTML snippet )
Type: `function( string )`

The callback function contains the highlighted HTML snippet. Just pop that into your email template and you’re ready! 🎉

## Interested in contributing?

Read through our [guidelines for contributing](https://github.com/wildbit/mailbrush/blob/master/CONTRIBUTING.MD) to help make contributions quick and easy.

## Have you tried MailMason?

We built [MailMason](https://github.com/wildbit/mailmason) as a complete toolset to streamline building and updating a set of consistent transactional emails.
