// in order to save a score each time the function runs, we need to save the score OUTSIDE the 
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
/*  
if (!score) {
score = {
  wins: 0,
  loses: 0,
  ties: 0
};
}
*/

updateScoreElement();

const computerMove = pickCompMove();
console.log(computerMove);

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  //The line below basically checks if 'isAutoPlaying' is true. bc '!isAutoPlaying' is true, the function will run
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickCompMove();
      playGame(playerMove);
    }, 1500);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickCompMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    } else if (computerMove === 'scissors') {
      result = 'Its a tie!';
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove === 'paper') {
      result = 'Its a tie!';
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
    }
  }
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Its a tie!';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else if (computerMove === 'scissors') {
      result = 'You win!';
    }
  }

  if (result === 'You win!') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.loses += 1;
  } else if (result === 'Its a tie!') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  function updateWinLoss() {
    document.querySelector('.js-result').innerHTML = result;
  }

  function updateMoves() {
    document.querySelector('.js-moves').innerHTML = `You
<img src="./images/${playerMove}-emoji.png" class="move-icon">
<img src="./images/${computerMove}-emoji.png" class="move-icon">
Computer `;
  }

  updateWinLoss();
  updateMoves();
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Player wins: ${score.wins}, Player loses: ${score.loses}, Ties: ${score.ties}`;
}

//When picking a function name, use verbage somewhere within it.
function pickCompMove() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1) {
    computerMove = 'rock';
  } else if (randomNum >= 1 && randomNum < 2) {
    computerMove = 'paper';
  } else if (randomNum >= 2 && randomNum < 3) {
    computerMove = 'scissors';
  };

  return computerMove;
}

// This is a function saved inside an object. Aka a method
// local storage only supports strings

// function scoreKeeper() {

//   // let score ;

//   for (let score = 0; score < 10; score++) {
//     const scoreValues = {
//       compScore: score,
//       playerScore: score,
//       tie: score
//     }
//     console.log(scoreValues.compScore);
//   }

//   if (playerMove === computerMove) {
//     scoreKeeper.compScore = scoreKeeper.tie
//   }

//   const scoreValues = {
//   compScore: score++,
//   playerScore: score++,
//   tie: score++
// }
// }

// scoreKeeper();