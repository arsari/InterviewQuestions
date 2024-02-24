/**
 * Coding Interview Question 01
 */

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`With var = ${i}`);
  }, 1000 + i);
}

// output: 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`With let = ${i}`);
  }, 1000 + i);
}

// output: 0 1 2
