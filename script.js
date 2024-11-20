function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const roundResult = document.querySelector('#round-result');
  const scoreDisplay = document.querySelector('#score');
  const winnerDisplay = document.querySelector('#winner');

  // Function to get computer's random choice
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

  // Function to play a single round
  function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
          return "It's a tie!";
      } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
      ) {
          humanScore++;
          return `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
      } else {
          computerScore++;
          return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
      }
  }

  // Helper function to capitalize a word
  function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Function to handle button clicks
  function handleClick(playerSelection) {
      if (humanScore < 5 && computerScore < 5) {
          const computerSelection = getComputerChoice();
          const result = playRound(playerSelection, computerSelection);

          // Update DOM elements
          roundResult.textContent = result;
          scoreDisplay.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

          // Check for winner
          if (humanScore === 5) {
              winnerDisplay.textContent = 'You win the game!';
          } else if (computerScore === 5) {
              winnerDisplay.textContent = 'Computer wins the game!';
          }
      }
  }

  // Add event listeners to buttons
  document.querySelector('#rock').addEventListener('click', () => handleClick('rock'));
  document.querySelector('#paper').addEventListener('click', () => handleClick('paper'));
  document.querySelector('#scissors').addEventListener('click', () => handleClick('scissors'));
}

// Start the game
playGame();
