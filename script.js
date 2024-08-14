const getComputerChoice = () => {
  let options = ['Rock', 'Paper', 'Scissor']
  let randomNum = Math.floor(Math.random() * 3)
  return options[randomNum]
}


const getResult = (playerChoice, computerChoice) => {
  console.log(playerChoice)
  console.log(computerChoice)
  if (playerChoice == computerChoice)
    return 0
  else if (playerChoice == 'Rock' && computerChoice == 'Scissor')
    return 1
  else if (playerChoice == 'Paper' && computerChoice == 'Rock')
    return 1
  else if (playerChoice == 'Scissor' && computerChoice == 'Paper')
    return 1
  else
    return -1
}

const totalScore = {
  playerScore: 0,
}

const showResult = (score, playerChoice, computerChoice) => {
  let resultDiv = document.getElementById('result')
  if (score == 1)
    resultDiv.innerText = `You Win!`
  else if (score == -1)
    resultDiv.innerText = `You Lose!`
  else
    resultDiv.innerText = `It's a Draw!`
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  //playerScore.innerText=`${Number(playerScore.innerText)+score}`
  totalScore['playerScore'] += score
  playerScore.innerText = `Your Score: ${totalScore['playerScore']}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

const onClickRPS = (playerChoice) => {
  let computerChoice = getComputerChoice()
  let score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}


const playGame = () => {
  let option = document.querySelectorAll('.rpsButton')
  option.forEach(options => {
    options.onclick = () => {
      onClickRPS(options)
    }
  })
  let endDiv = document.getElementById('endGameButton')
  endDiv.onclick = () => {
    endGame()
  }
}

const endGame = () => {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
