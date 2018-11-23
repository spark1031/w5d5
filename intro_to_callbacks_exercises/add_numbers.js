const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('What number?', (res) => {
      let num = parseInt(res);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));








































// const readline = require('readline');
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question('Give me a new number.', (res) => {
//       let newNum = parseInt(res, 10);
//       sum += newNum;
//       console.log(sum);
//       addNumbers(sum, numsLeft - 1, completionCallback);
// 
//     });
//   } else if (numsLeft === 0) {
//     completionCallback(sum);
//     reader.close();
//   }
// }
// 
// addNumbers(1, 3, sum => console.log(`Total Sum: ${sum}`));
