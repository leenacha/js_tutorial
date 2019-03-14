// Making URL-appropriate strings from an array.
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Defining an auxiliary function
// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(e){
     urls.push(urlify(e));
    //urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
  //return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalUrls(states));

// A function, using `map`, that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.
function functionalFullUrls(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}
console.log(functionalFullUrls(states));

// An alternative for the function above
function wholeUrl(element) {
  return "https://example.com/" + urlify(element);
}

function functionalFullUrls(elements) {
  return elements.map(wholeUrl);
}
console.log(functionalFullUrls(states));
