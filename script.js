'use strict';

const guessNumber = document.getElementById('guess-number');
const btnCheck = document.getElementById('btn-check');
const btnAgain = document.getElementById('btn-again');
const message = document.getElementById('para-2');
const labelScore = document.getElementById('label-score');
const highScore = document.getElementById('high-score');

let secretNumber = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.question').textContent = secretNumber;

let score = 20;
let highScore1 = 0;

btnCheck.addEventListener('click', function (){
  let guess = Number(guessNumber.value);

  if(!guess){
    document.querySelector('.para-2').textContent = '⛔ no number';
  }else if(guess === secretNumber){
    document.querySelector('.para-2').textContent = '🎉 Correct number';

    document.querySelector('.question').textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor = 'Green';

    if(score > highScore1){
      highScore1 = score;
      highScore.textContent = highScore1;
    }

  }else if(score > 1){
    if(guess > secretNumber){
      document.querySelector('.para-2').textContent = '📈Too high!';
      score--;
      labelScore.textContent = score;
      guessNumber.value = null;
    }else if(guess < secretNumber){
      document.querySelector('.para-2').textContent = '📉Too Low!';
      score--;
      labelScore.textContent = score;
      guessNumber.value = null;
    }
  }else{
    document.querySelector('.para-2').textContent = '💥 You lost the game!';

    document.querySelector('.question').textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor = 'Red';
  }
});

btnAgain.addEventListener('click', function(){
  document.querySelector('body').style.backgroundColor = 'Black';

  document.querySelector('.question').textContent = '?';

  document.querySelector('.para-2').textContent = 'Start Guessing...';

  score = 20;
  secretNumber = Math.trunc(Math.random()*20) + 1;
  labelScore.textContent = score;
  guessNumber.value = null;
});