let eachRound = document.querySelector('.round')
let total = document.querySelector('.final')

let resultRound


function getPlayerChoice(){
    let playerSelection = prompt("Choose between Rock, Paper, or Scissors").toLowerCase() //question to player

    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors' && playerSelection !== ''){ //just accept 3 options

        alert(`You choose ${playerSelection}`)
        
    } else{
        alert(`You can't choose that... you need to choose one of them (Rock, Paper, or Scissors)`) 
    }
    return playerSelection
}

playerSelection = getPlayerChoice() //answer of player

function getComputerChoice(){ //computer choose one of 3 options
    const randomNumber = Math.random().toFixed(2)
    if(randomNumber < 0.33){
        return "rock"
    } else if (randomNumber < 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

let computerSelection = getComputerChoice() //answer of computer


function playRound(playerSelection, computerSelection){ //player + computer = who wins?

    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection ==='paper' || playerSelection === 'paper' && computerSelection ==='rock'){
        eachRound.innerHTML += `You Win! The ${playerSelection} beats ${computerSelection}!<br>` 
        return resultRound = 'winner'
    
    } else if (playerSelection === computerSelection) {
        eachRound.innerHTML += `It's a tie! You choose ${playerSelection} and computer choose ${computerSelection}!<br>`
        return resultRound = 'tie'

    } else{
        eachRound.innerHTML+= `You Lose! The ${playerSelection} beats ${computerSelection}!<br>` 
        return resultRound = 'loser'
    }
    
}


function game(){  //repeat 5 times and show a result

    let playerScore = 0
    let computerScore = 0
    let results = []


    for(let i=1; i<=5; i++){ //repeat 5 times and have a result for each round
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice()
        resultRound = playRound(playerSelection, computerSelection) 
        results.push(resultRound)

        if (resultRound === "winner"){ //refresh scores
            resultRound === 1
            playerScore++

        } else if (resultRound === "loser") {
            resultRound === -1
            computerScore++
        }
    }

    if(playerScore > computerScore){ //show final result
        total.textContent += "Player WINS!"
    } else if (playerScore < computerScore){
        total.textContent += "Player LOST!"
    } else{
        total.textContent += "It's a TIE!"
    }
}
game()



