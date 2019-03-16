let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// // Map
// // ...a function over an array of elements; a powerful alternative to looping

// // Making URL-appropriate strings from an array.
//
// // Defining an auxiliary function
// // Returns a URL-friendly version of a string.
// // Example: "North Dakota" -> "north-dakota"
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join('-');
// }
//
// // urls: Imperative version
// function imperativeUrls(elements) {
//   let urls = [];
//   elements.forEach(function(e){
//      urls.push(urlify(e));
//     //urls.push(element.toLowerCase().split(/\s+/).join("-"));
//   });
//   return urls;
// }
// console.log(imperativeUrls(states));
//
// // urls: Functional version
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element));
//   //return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
// }
// console.log(functionalUrls(states));
//
// // A function, using `map`, that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.
// function functionalFullUrls(elements) {
//   return elements.map(element => "https://example.com/" + urlify(element));
// }
// console.log(functionalFullUrls(states));
//
// // An alternative for the function above
// function wholeUrl(element) {
//   return "https://example.com/" + urlify(element);
// }
//
// function functionalFullUrls(elements) {
//   return elements.map(wholeUrl);
// }
// console.log(functionalFullUrls(states));

// Filter
// ...data based on some boolean criterion

// // Solving a filtering problem imperatively.
// function imperativeSingles(elements) {
//   let singles = [];
//   elements.forEach (function(element) {
//     if (element.split(/\s+/).length === 1) {
//         singles.push(element);
//     }
//   });
//   return singles;
// }
// console.log(imperativeSingles(states));
//
// // singles: Functional version
// function functionalSingles(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 1);
// }
// console.log(functionalSingles(states));
//
// // A filter function returns the Dakotas using String#includes.
// function stringDakotas(elements) {
//   return elements.filter(element => states.includes("Dakota"));
// }
// console.log(stringDakotas(states));
//
// // A filter function with a regex testing the split array length as 2.
// function regexDakotas(elements) {
//   return elements.filter(element => element.split(/\s+/).length === 2);
// }
// console.log(regexDakotas(states));

// Reduce
// ...or takes the elements of an array and process (reduce) them based on some operation, or accumulate results and store them in the first argument.

// An imperative solution for summing integers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// An imperative solution for state/length correspondence.

// length: imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));
