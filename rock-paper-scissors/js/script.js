function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return -1;
  if (playerSelection === 'Rock' && computerSelection === 'Scissor' || 
      playerSelection === 'Paper' && computerSelection === 'Rock' ||
      playerSelection === 'Scissor' && computerSelection === 'Paper'
  ) {
    return 1;
  } else {
    return 0;
  }
}

function playerChoiche(eventChoiche) {
  return eventChoiche;
}

function computerChoiche() {
  const possibileChoiche = ['Rock', 'Paper','Scissor'];
  const randomChoice = Math.floor(Math.random() * possibileChoiche.length);
  return possibileChoiche[randomChoice];
}

// Reset the counter 'timesPerRound' and start a new game
function newGame() {
  headerWinnerEl.innerText = '';
  playerPointsEl.innerText = '0';
  computerPointsEl.innerText = '0';    
  hiddenEl.classList.add('hidden');
  return playerPoints = 0, computerPoints = 0, timesPerRound = 0;
}

// Main function
function startGame() {
  for (btn of btnChoicheEl) {
    btn.addEventListener('click', (e) => {
      let currentPlayerChoiche = e.target.name;
      let currentComputerChoiche = computerChoiche();

      if (timesPerRound < 5) {        
        const theWinner = playRound(currentPlayerChoiche, currentComputerChoiche);
        if (theWinner === 1) {
          playerPoints++;
          playerPointsEl.innerText = playerPoints;
          showStatusEl.innerText = `Your ${currentPlayerChoiche} beats Computer's ${currentComputerChoiche} `;
        }
        else if (theWinner === 0) {
          computerPoints++;
          computerPointsEl.innerText = computerPoints;
          showStatusEl.innerText = `Computer ${currentComputerChoiche} beats you`;
        }
        else if (theWinner === -1) {
          showStatusEl.innerText = `${currentComputerChoiche} = ${currentPlayerChoiche} `;
        }
        timesPerRound++; 
      }
      if (timesPerRound === 5) {        
        showStatusEl.innerText = '';
        if (playerPoints > computerPoints) headerWinnerEl.innerText = 'Player Won!'
        else if (playerPoints < computerPoints) headerWinnerEl.innerText = 'Computer Won!'
        else headerWinnerEl.innerText = 'Draw!';
        hiddenEl.classList.remove('hidden')
      }
    })
  }  
}

const btnChoicheEl = document.querySelectorAll('.btn-choiche');
const btnResetEl = document.querySelector('.btn-reset');
const headerWinnerEl = document.querySelector('.winner-is');
const playerPointsEl = document.querySelector('.player-points');
const computerPointsEl = document.querySelector('.computer-points');
const showStatusEl = document.querySelector('.show-status');
const hiddenEl = document.querySelector('.hidden');
let timesPerRound = 0, playerPoints = 0, computerPoints = 0;

btnResetEl.addEventListener('click', newGame);
startGame();