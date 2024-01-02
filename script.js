let resultDiv = document.getElementById('result')
let playerScore = document.getElementById('player-score')
let choice = document.getElementById('hands')

const totalscores = {
  computerScore:0,
  playerScore :0
}
function getComputerChoice() {
  let rpschoices = ['Rock','Scissors','Paper'];
  let randomChoice =         Math.floor(Math.random()*rpschoices.length);
  return rpschoices[randomChoice]
}



function getResult(playerChoice, computerChoice) {
  let score;
  if(playerChoice == computerChoice){
    score = 0
  }
  else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') ||(playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper') ){
    score = 1

  }
  else{
    score = -1
  }
      return score

}


function showResult(score, playerChoice, computerChoice,totalScore) {
  if(score == -1){
  resultDiv.innerText = 'You Lose!';}
  else if (score == 1){
    resultDiv.innerText = 'You Win!';
  }
  else{
    resultDiv.innerText = "It's a draw!";
  }
  playerScore.innerText = totalScore;
  choice.innerText = `🧔 chose ${playerChoice} & 🤖 chose ${computerChoice}`
}

function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice =getComputerChoice();
  console.log({computerChoice })
  const score = getResult(playerChoice,computerChoice)
  totalscores['playerScore'] += score
  console.log({score})
  console.log(totalscores)
  showResult(score,playerChoice,computerChoice,totalscores['playerScore'])
}

 

function playGame() {

 const rpsBtns = document.querySelectorAll('.rpsButton');
 const endBtn = document.getElementById('endGameButton');
    rpsBtns.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  endBtn.onclick = () => endGame()
}

function endGame() {
  resultDiv.innerText = '';
  playerScore.innerText = '';
  choice.innerText = '';
  totalscores['playerScore'] = 0;
}

playGame()