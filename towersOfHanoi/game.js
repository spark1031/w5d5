const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

class Game {
  constructor (towers) {
    this.towers = towers;
  }
  
  promptMove (callback) {
    let firstTowIdx, secondTowIdx;
    reader.question('Pick a tower to move from (0, 1, 2): ', (res1) => {
      firstTowIdx = res1;
      reader.question('Pick a tower to move to (0, 1, 2): ', (res2) => {
        secondTowIdx = res2;
        callback(firstTowIdx, secondTowIdx);
      });
    });
  }
  
  isValidMove (ftIdx, stIdx) {
    let ft = this.towers[ftIdx];
    let st = this.towers[stIdx];
    if (ft === st || ft[ft.length - 1] > st[st.length - 1] || ft.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  
  move (ftIdx, stIdx) {
    
    if (this.isValidMove(ftIdx, stIdx)) {
      let ft = this.towers[ftIdx];
      let st = this.towers[stIdx];
      
      st.push(ft.pop());
      return true;
    } else {
      console.log('Invalid move!');
      return false;
    }
  }
  
  print () {
    console.log(JSON.stringify(this.towers));
  }
  
  isWon () {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  
  run (completionCallback) {
    if (this.isWon()) {
      this.print();
      reader.close();
      completionCallback();
    } else {
      this.print();
      this.promptMove(this.move.bind(this));
      
    }
  }
}

function gameOver () {
  console.log('Game over! Nice job.');
}

// function callback1(arg1, arg2) {
//   console.log(arg1, arg2);
// }

// let tower1 = [[], [3,2,1], []];
// let game1 = new Game(tower1);
// game1.isWon(); // true
// 
// let tower2 = [[], [], [3,2,1]];
// let game2 = new Game(tower2);
// game2.isWon(); // true

let tower3 = [[1], [3,2], []];
let game3 = new Game(tower3);
game3.run(gameOver); // ???

