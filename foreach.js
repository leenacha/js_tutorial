// Iterating through an array with a forEach loop.
let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

      // Iterating through an array with a for loop.
      a = ["ant", "bat", "cat", 42];
      for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
      }

// Using a forEach loop to iterate through a string.
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

      // Using a for loop to iterate through a string.
      soliloquy = "To be, or not to be, that is the question:"
      for (let i = 0; i < soliloquy.length; i++) {
        console.log(soliloquy[i]);
      }

// Iterating through an array with a forEach loop, using fat arrow notation.
a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
  console.log(element);
});

// A forEach loop to sort an array.
let x = [8, 17, 42, 99];
x.forEach(function(a, b, c) {
  console.log(a, b, c)
});
