const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
    res === 'yes' ? callback(true) : callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
  askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
    if (isGreaterThan) {
      madeAnySwaps = true;
      let num = arr[i];
      let next_num = arr[i + 1];
      arr[i] = next_num;
      arr[i+1] = num;
    }
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function callback1(arr) {
  console.log(arr);
  return;
}

absurdBubbleSort([3, 2, 1], callback1);

// 
// innerBubbleSortLoop([3,2,1], 0, false);
// 
// askIfGreaterThan(3, 2, (boolean) => {
//   console.log(boolean);
// });









































// const readline = require('readline');
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// 
// function callbackExample(boolean) {
//   console.log(boolean);
// }
// 
// function askIfGreaterThan(el1, el2, callback) {
//   reader.question(`Is ${el1} greater than ${el2}? yes or no `, (res) => {
//     if (res === 'yes') {
//       callback(true);
//     } else {
//       callback(false);
//     }
//     // reader.close();  
//   });
// }
// 
// askIfGreaterThan(3, 1, callbackExample);