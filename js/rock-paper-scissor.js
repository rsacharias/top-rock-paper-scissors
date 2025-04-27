let humanScore = 0;
let computerScore = 0;

const maxPoints = 5;

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

function update_score() {
  const score = document.querySelector("#score");
  score.textContent = `You: ${humanScore} -- Comp: ${computerScore}`;

  if (humanScore == maxPoints || computerScore == maxPoints) {
    const resultGame = document.querySelector("#result-game");

    resultGame.textContent =
      humanScore >= 3 ? "Congrats. You've won!" : "Uff ... You lose!";

    humanScore = 0;
    computerScore = 0;
  }
}

function playRound(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  const resultRound = document.querySelector("#result-round");

  const capitalize = (word) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (humanChoice === computerChoice) {
    resultRound.textContent = "Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultRound.textContent = `You won! ${capitalize(humanChoice)} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultRound.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`;
  }

  update_score();
}

const play = document.querySelector("#play");
play.addEventListener("click", playRound);
