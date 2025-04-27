function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Your choice:").toLowerCase();

  if (choice !== "rock" && choice !== "paper" && choice !== "scissors")
    return null;

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let capitalize = (word) =>
      word[0].toUpperCase() + word.slice(1).toLowerCase();

    if (humanChoice === computerChoice) {
      return "Tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You won! ${capitalize(humanChoice)} beats ${computerChoice}.`;
    } else {
      computerScore++;
      return `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
    }
  }

  while (humanScore < 3 && computerScore < 3) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }

  if (humanScore === 3) {
    alert("Congrats! You've won!");
  } else {
    alert("You suck!!!");
  }
}

playGame();
