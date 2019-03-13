// A program to count words in text.

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// // Unique words
// let uniques = {};
// // All words in the text, including apostrophes e.g. "wand'ring"
// let words = sonnet.match(/\w+'\w+|\w+/g);
//
// // Iterate through 'words' and build up an associative array of unique words.
// for (let i = 0; i < words.length; i++) {
//    let word = words[i];
//    if (uniques[word]) {
//     uniques[word] += 1;
//    } else {
//      uniques[word] =1;
//    }
//  }
//
// console.log(uniques)

// The loop rewritten using Map

let words = sonnet.match(/\w+'\w+|\w+/g);

let uniques = new Map();
for (let i = 0; i < words.length; i++) {
   let word = words[i];
   if (uniques.get(word)) {  // 'if `word` is a key in `uniques`
   let currentCount = uniques.get(word); // retrieve the value for the key `word` and assign it to a new variable `currentCount`
   let updatedCount = currentCount +1; // retrieve the value of `currentCount` plus one and assign it to a new variable 'updatedCount'
    uniques.set(word, updatedCount); // retrive the value of `updatedCount` and set it as the value associated with the key 'word'
  } else { // if 'word' does not yet have an entry in 'uniques'
     uniques.set(word, 1); // initialize the value of the key `word` to 1
   }
 }

console.log(uniques)

// single line of code to refactor lines 43-45
// uniques.set("loved", uniques.get("loved") + 1)
