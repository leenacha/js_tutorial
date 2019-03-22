// // Reverses a string (including emojis).
// function reverse(string) {
//   return Array.from(string).reverse().join("")
// }
//
// // Returns true for a palindrome, false otherwise.
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }
//
// // Returns an array of the username and domain for a standard email address.
// function emailParts(email) {
//   return email.toLowerCase().split("@");
// }
//
// Moving 'palindrome` into a method.

// Defines a Phrase object.
// function Phrase(content) {
//   this.content = content;
//
//   // Returns true if the phrase is a palindrome, false otherwise.
//   this.palindrome = function palindrome() {
//     let processedContent = this.content.toLowerCase();
//     return processedContent === reverse(processedContent);
//   };
// }
//
// // Making the content LOUDER
//
// // Defines a Phrase object.
// function Phrase(content) {
//   this.content = content;
//
//   // Makes the phrase LOUDER.
//   this.louder = function palindrome() {
//     let processedContent = this.content.toUpperCase();
//     return processedContent;
//   };
// }
//
// //Moving processedContent into a method.
//
// // Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }
//
// // Defines a Phrase object.
// function Phrase(content) {
//   this.content = content;
//
//   // Returns content processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.content.toLowerCase();
//   }
//
//   // Returns true if the phrase is a palindrome, false otherwise.
//   this.palindrome = function palindrome() {
//     return this.processedContent() === reverse(this.processedContent());
//   }
// }
//
// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;
//
//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.translation.toLowerCase();
//   }
// }
//
// TranslatedPhrase.prototype = new Phrase();

// Eliminating duplication with a processor method.

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Returns content in lower case
  this.processor = function(string) {
    return this.content.toLowerCase();
  }

  // Returns processed content
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
