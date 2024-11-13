function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function getComputerChoice() { 
      const randomNum = Math.random(); 
      if (randomNum < 0.33) { 
        return "rock"; 
      } else if (randomNum < 0.66) { 
        return "paper";
      } else { 
        return "scissors"; 
      }
    }
  
    function getHumanChoice() { 
      const choice = prompt("Please enter rock, paper, or scissors:");
      if (choice === "rock" || choice === "paper" || choice === "scissors") { 
        return choice;
      } else { 
        alert("Invalid choice, please enter rock, paper, or scissors");
        return getHumanChoice();
      }
    }
  
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}`);
        return "human";
      } else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}`);
        return "computer";
      }
    }
  
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const result = playRound(humanChoice, computerChoice);
  
      if (result === "human") {
        humanScore++;
      } else if (result === "computer") {
        computerScore++;
      }
    }
  
    // Declare the overall winner
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
      console.log("The computer wins this game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  playGame();
  

    