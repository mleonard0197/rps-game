function sayHello() {
    alert("Hello World!")
}


function getComputerChoice() {
    let choiceSelect = Math.random();

        if (choiceSelect < .33) {
            return "Rock";
        }
        else if (choiceSelect >= .33 && choiceSelect < .67) {
            return "Paper";
        }
        else if (choiceSelect >= .67) {
            return "Scissors";
        }
}

function playRound(playerSelection, computerSelection) {
    //sets player's input to lowercase to make it case insensitive
    playerSelection = playerSelection.toLowerCase();

    //playing a round returns a -1 if comp wins, 0 if tie, or a 1 if player wins
    if (playerSelection == "rock") {
        if (computerSelection == "Paper") {
            return -1;
        }
        else if (computerSelection == "Rock") {
            return 0;
        }
        else if (computerSelection == "Scissors") {
            return 1;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "Paper") {
            return 0;
        }
        else if (computerSelection == "Rock") {
            return 1;
        }
        else if (computerSelection == "Scissors") {
            return -1;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "Paper") {
            return 1;
        }
        else if (computerSelection == "Rock") {
            return -1;
        }
        else if (computerSelection == "Scissors") {
            return 0;
        }
    }
}


function gamePlayer () {
    //Starts the game and prompts the user to enter their number of rounds
    let rounds = prompt ("Welcome to Rock, Paper, Scissors! How many rounds would you like to play?", 0);

    let playerWins = 0;
    let compWins = 0;
    //proceeds through the number of rounds until finished then returns score
    for (i=0; i<rounds; i++) {
        let compSelect = getComputerChoice();
        let playerSelect = prompt("Which choice will you choose: Rock, Paper, or Scissors?", "Your selection.");
        console.log("The other player chose " + compSelect + ".");
        console.log(playRound (playerSelect, compSelect));

        let roundResult = playRound(playerSelect, compSelect);
        if (roundResult == 1) {
            playerWins += 1;
            console.log("It's a win! You take the round.");
            alert("You win!")
        }
        else if (roundResult == -1) {
            compWins += 1;
            console.log("It's a loss! The other player takes the round.");
            alert("You lose!")
        }
        else if (roundResult == 0) {
            console.log("It's a tie! " + compSelect + " and " + playerSelect + " go head to head!")
            alert("It's a tie!")
            continue;
        }
        
    }

    let gameResult = "And that's the game! You won " + playerWins + " and the other player won " + compWins + "!";
    return gameResult;

}


const playerSelection = "";
const computerSelection = getComputerChoice();
//console.log("The other player chose " + computerSelection + ".");
console.log(playRound(playerSelection,computerSelection));
console.log(gamePlayer());