// Initialise a variable called computerSelection
let computerSelection = "";
// // Initialise a variable called playerSelection
// let playerSelection = "";
// Initialise a variable called playerScore and assign it 0
let playerScore = 0;
// Intialise a variable called computerScore and assign it 0
let computerScore = 0;
 

 

// create a function called computerPlay that generates a random number between
// one and three and then assigns either Rock, Paper or Scissors depending on
// the number generated

function computerPlay() {
 

    // Initialise a variable called randomNumber

    let randomNumber = 0; 

    // generate a random number between 1 and 3 and then assign the result to the variable randomNumber

    randomNumber = Math.floor((Math.random() * 3) + 1);

    // If randomNumber EQUALS 1 THEN set computerSelection to "Rock"
    if (randomNumber == 1) {
        computerSelection = "rock";
    }

    // ELSE IF randomNumber EQUALS 2 THEN set computerSelection to "Paper"

    else if (randomNumber == 2) {
        computerSelection = "paper";
    }

    // ELSE IF randomNumber EQUALS 3THEN set computerSelection to "Scissors"

    else if (randomNumber == 3) {
        computerSelection = "scissors";
    }

    // RETURN computerSelection

    return computerSelection;

}

 

// Create a function called singleRound that takes two parameters as arguments 
// - playerSelection and computerSelection - and determines who wins

function singleRound(playerSelection, computerSelection) {
    
    // IF playerSelection EQUALS computerSelection 
    // THEN RETURN "It's a draw! playerSelection and computerSelection draw."
    if (playerSelection == computerSelection) {
        return `It's a draw! ${ playerSelection} and ${computerSelection} draw.`
    }

    // ELSE IF playerSelection EQUALS Rock AND computerSelection EQUALS Scissors
    // THEN RETURN "You win! playerSelection beats computerSelection"

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        // INCREASE playerScore by 1
        playerScore++;
        return `You win! ${ playerSelection} beats ${ computerSelection }`;
        
    }

    // ELSE IF playerSelection EQUALS Scissors AND computerSelection EQUALS Paper
    // THEN RETURN "You win! playerSelection beats computerSelection"

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        // INCREASE playerScore by 1
        playerScore++;
        return `You win! ${ playerSelection} beats ${ computerSelection }`;
        
    }

    // ELSE IF playerSelection EQUALS Paper AND computerSelection EQUALS Rock
    // THEN RETURN "You win! playerSelection beats computerSelection"

    else if (playerSelection == "paper" && computerSelection == "rock") {
        // INCREASE playerScore by 1
        playerScore++;
        return `You win! ${ playerSelection} beats ${ computerSelection }`;
        
    }

    // ELSE RETURN "You lose! playerSelection loses to computerSelection"
    else {
        // INCREASE computerScore by 1
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        
    }
}

 

// Create a funtion called game that tracks 5 rounds of the singleRound function and prints to the console the result after each round
// and the overall winner at the end

function game() {    

    // Call the singleRound function five times

    for (let i = 0; i < 5; i++) {

        // Ask the payer to type in Rock Paper or Scissors

        playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();

        // Run the computerPlay() function to generate a computer choice

        console.log(computerPlay());

        console.log(singleRound(playerSelection, computerSelection));
    }
    
    // After the last round, IF playerScore is greater then computerScore
    // THEN print to the console "You win! playerScore games to computerScore"

    if (playerScore > computerScore) {
        console.log(`You win! ${ playerScore } games to ${ computerScore }`);
    }
    
    // ELSE print to the console "You lose! playerScore games to computerScore"

    else {
        console.log(`You lose! ${ playerScore } games to ${ computerScore }`)
    }
}