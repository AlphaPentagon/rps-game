
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gameRounds = 1;


const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const gameText = document.querySelector("#game-text");
const playerScoreContent = document.querySelector("#player-score");
const compScoreContent = document.querySelector("#comp-score");
const gameRoundsContent = document.querySelector("#game-rounds");
const resetButton = document.createElement('button');
const resetContainer = document.querySelector("#reset-button-container");

rock.addEventListener("click", function() { game("rock")});
paper.addEventListener("click", function() { game("paper")});
scissors.addEventListener("click", function() { game("scissors")});
resetButton.addEventListener("click", function() { resetGame()});

 

 

// create a function called computerPlay that generates a random number between
// one and three and then assigns either Rock, Paper or Scissors depending on
// the number generated

function computerPlay() { 

    let randomNumber = 0; 

    // generate a random number between 1 and 3 and then assign the result to the variable randomNumber

    randomNumber = Math.floor((Math.random() * 3) + 1);   
    if (randomNumber == 1) {
        computerSelection = "rock";
    }
    else if (randomNumber == 2) {
        computerSelection = "paper";
    }
    else if (randomNumber == 3) {
        computerSelection = "scissors";
    }
    return computerSelection;
} 

// Create a function called singleRound that takes two parameters as arguments 
// - playerSelection and computerSelection - and determines who wins

function singleRound(playerSelection, computerSelection) {    
    
    if (playerSelection == computerSelection) {
        gameText.textContent = `Your ${ playerSelection} and computer's ${computerSelection} draw.`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        gameText.textContent = `Your ${ playerSelection} beats computer's ${ computerSelection }`;        
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        gameText.textContent =`Your ${ playerSelection} beats computer's ${ computerSelection }`;        
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        gameText.textContent = `Your ${ playerSelection} beats computers ${ computerSelection }`;        
    } else {
        // INCREASE computerScore by 1
        computerScore++;
        gameText.textContent = `Your ${playerSelection} loses to computer's ${computerSelection}`;        
    }

   


}

function resetGame() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerScore = 0;
    computerScore = 0;
    gameRounds = 1;
    playerScoreContent.textContent = `You: `;
    compScoreContent.textContent = `Computer: `;
    gameRoundsContent.textContent = `Round: `;
    gameText.textContent = `Click a button to start the game`
    resetContainer.removeChild(resetButton); 
}

// Create a funtion called game that tracks 5 rounds of the singleRound function and prints to the console the result after each round
// and the overall winner at the end

function game(playerSelection) {
                  

        // Run the computerPlay() function to generate a computer choice

        computerPlay();
        
        singleRound(playerSelection, computerSelection);
        playerScoreContent.textContent = `You: ${playerScore}`;
        compScoreContent.textContent = `Computer: ${computerScore}`;
        gameRoundsContent.textContent = `Round: ${gameRounds}/5`; 
        playerSelection = "";
        computerSelection = "";
        gameRounds++;
        
        
  
    
    // After the last round, IF playerScore is greater then computerScore
    // THEN print to the console "You win! playerScore games to computerScore"

    if (gameRounds > 5) {
        if (playerScore > computerScore) {
            gameText.textContent = `You win!`;
        }    
        // ELSE print to the console "You lose! playerScore games to computerScore"
        else if (computerScore > playerScore) {
            gameText.textContent = `You lose!`;
        }
        else {
            gameText.textContent = `You draw!`;
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        resetButton.classList.add("buttons");
        resetButton.textContent = "Reset";
        resetContainer.appendChild(resetButton);

    }
}