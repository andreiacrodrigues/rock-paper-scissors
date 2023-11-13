let eachRound = document.querySelector('.round')
let total = document.querySelector('.final')
let buttons = document.querySelectorAll('button')
let totalUser = document.querySelector('#pointUser')
let totalComputer = document.querySelector('#pointComputer')

let round = 5
let playerScore = 0
let computerScore = 0
let resultRound

function getPlayerChoice(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
           if (round >= 0){
            playRound(button.id, getComputerChoice())
            --round
           } else {
                if (playerScore> computerScore){
                    total.textContent = "Player WINS!!!"
                    total.style.backgroundColor = 'green'
                } else if (playerScore < computerScore){
                    total.textContent = "Player LOST!"
                    total.style.backgroundColor = 'red'
                } else{
                    total.textContent = "It's a TIE!"
                }
           }
            
        })
    })
}
getPlayerChoice()

function getComputerChoice(){ 
    const randomNumber = Math.random().toFixed(2)
    if(randomNumber < 0.33){
        return "rock"
    } else if (randomNumber < 0.66){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){ 
    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection ==='paper' || playerSelection === 'paper' && computerSelection ==='rock' ){
        total.textContent = `You Win! The ${playerSelection} beats ${computerSelection}!` 
        playerScore ++
        totalUser.textContent = playerScore 
        return resultRound = 'winner'
    
    } else if (playerSelection === computerSelection) {
        total.textContent = `It's a tie! You choose ${playerSelection} and computer choose ${computerSelection}!`
        return resultRound = 'tie'

    } else{
        total.textContent= `You Lose! The ${playerSelection} beats ${computerSelection}!`
        computerScore++
        totalComputer.textContent = computerScore
        return resultRound = 'loser'
    }
    
}
