let humanScore = 0;
let computerScore = 0;
round = 1

function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"]
    let choice_index = Math.floor(Math.random() * choices.length);
    // console.log(choice_index)
    let computer_choice = choices[choice_index]
    // console.log("COMPUTER CHOICE: ",computer_choice)
    return computer_choice.toLowerCase();
}

function getHumanChoice() {
    let human_choice = prompt(`Rock, paper, scissor? Pick your choice.`)
    // console.log("YOUR CHOICE",human_choice);
    return human_choice.toLowerCase();
}

function playGame(){
    for (let round =1; round<=5; round++){
        if (round == 1){
            console.log("Welcome to Rock, Paper Scissors Game! You are playing 5 rounds")
            
            
        }
        console.log(`/Play Round ${round}`)
        
        const playRound = function () {
                computer_choice_input = getComputerChoice()
                human_choice_input = getHumanChoice()
                if  (human_choice_input === computer_choice_input) {
                    humanScore++
                    console.log(`You Won this round! ${humanScore} : ${computerScore}`)
                }else{
                    computerScore++
                    console.log(`You Loose this round ${humanScore} : ${computerScore}`)
                }
            };
            playRound()
            if (round < 5) {
                continue
            }else{
                if (humanScore > computerScore) {
                    console.log("You Won this Game!")

                }else {
                    console.log("You Loose this Game!")
                }
            };
        

    }      
}
playGame()







console.log("Maryam Anileleye")