// Reverses a string (including emojis).
function reverse(string) {
  return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Returns an array of the username and domain for a standard email address.
function emailParts(email) {
  return email.toLowerCase().split("@");
}

// Moving 'palindrome` into a method.

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  };
}

// Making the content LOUDER

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER.
  this.louder = function palindrome() {
    let processedContent = this.content.toUpperCase();
    return processedContent;
  };
}
