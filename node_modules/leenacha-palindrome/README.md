# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough™️ JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial/hello_world) by Michael Hartl.

The module can be used as follows:

```$ npm install --global leenacha-palindrome
$ vim test.js
let Phrase = require("leenacha-palindrome");
let justsayin = new Phrase("The 2020 Saturn-Pluto conjunction in Capricorn starts now.");
console.log(justsayin.palindrome());
$ node test.js
true```
