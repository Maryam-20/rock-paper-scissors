let humanScore = 0;
let computerScore = 0;
const main = document.querySelector("main");


function getComputerChoice () {
    return new Promise((resolve, reject) =>{
        let choices = ["rock", "paper", "scissors"]
        let choice_index = Math.floor(Math.random() * choices.length);
        
        let computer_choice = choices[choice_index]
        
        if (computer_choice) {
            resolve(computer_choice);
            
        } else {
            reject("FAILED TASK")
        }
        
    })
   
};

function getHumanChoice() {
    return new Promise((resolve) => {
        const human_choice = document.createElement("input");
        human_choice.type = "text";
        human_choice.placeholder = "Enter rock, paper or scissors"
        human_choice.addEventListener('keydown', (e) => {
            if (e.key === "Enter"){
                const value = human_choice.value;
                human_choice.remove();

                resolve(value)
            
            }
            
        })
        main.appendChild(human_choice);
    })
};


const playRound = async function (round) {
    if (round === 1) {
        const welcomeDiv = document.createElement("div");
        welcomeDiv.textContent = "Welcome to Rock, Paper, Scissors! You are playing 5 rounds";
        
        main.appendChild(welcomeDiv)
    };
    const numberRounds = document.createElement("h4")
    numberRounds.textContent = `Round ${round}`;
    main.appendChild(numberRounds)

    computer_choice_input = await getComputerChoice()
    console.log(computer_choice_input)
    human_choice_input = await getHumanChoice()
    console.log(human_choice_input)
    if  (human_choice_input === computer_choice_input) {
        humanScore++
        console.log(`You Won this round! ${humanScore} : ${computerScore}`)
        const display = document.createElement("span")
        display.textContent = ` - You Won ${humanScore} : ${computerScore}`
        numberRounds.appendChild(display)
    }else{
        computerScore++
        console.log(`You Loose this round ${humanScore} : ${computerScore}`)

        const display = document.createElement("span")
        display.textContent = ` - You Loose ${humanScore} : ${computerScore}`
        numberRounds.appendChild(display)
    }
    
};


const play_game = document.querySelector("button")
play_game.addEventListener('click', async () => {
     play_game.disabled = true;
    for (let round = 1; round <= 5; round++) {
        
        await playRound(round)
    };
    
    if (humanScore > computerScore) {

        console.log("You Won this Game!");
        const displayGameWinner = document.createElement("h2");
        displayGameWinner.textContent = 'You Won this Game! \\ Game Finished';
        main.appendChild(displayGameWinner);

    } else if (computerScore > humanScore) {

        console.log("You Lose this Game!");
        const displayGameWinner = document.createElement("h2");
        displayGameWinner.textContent = 'You Lose this Game! \\ Game Finished';
        main.appendChild(displayGameWinner)

    } else {

        console.log("It's a Tie!");
        const displayGameWinner = document.createElement("h2");
        displayGameWinner.textContent = "It's a Tie! \\ Game Finished";
        main.appendChild(displayGameWinner)

    }

    setTimeout(() => {
        const childrenArray = Array.from(main.children);
        const otherChildren = childrenArray.slice(2)
        otherChildren.forEach(child => {
           
            child.remove()
            
            play_game.disabled = false;
        })
    }, 4000)
    
    
    console.log("Game Finished")
});

