let humanScore = 0;
let computerScore = 0;

const maxPoints = 2;

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
  score.textContent = `You: ${humanScore} -- Cpu: ${computerScore}`;

  if (humanScore == maxPoints || computerScore == maxPoints) {
    const resultGame = document.createElement("div");
    resultGame.id = "result-game";

    resultGame.textContent =
      humanScore < maxPoints ? "Uff ... You lose!" : "Congrats. You've won!";

    document.body.appendChild(resultGame);

    humanScore = 0;
    computerScore = 0;
  }
}

function clear_result() {
  if (humanScore == 0 && computerScore == 0) {
    const resultGame = document.querySelector("#result-game");
    if (resultGame) resultGame.remove();
  }
}

function playRound(event) {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  const resultRound = document.querySelector("#result-round");

  const capitalize = (word) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();

  clear_result();

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
