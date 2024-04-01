function playRound(clickEvent) {
  const playerSelection = clickEvent.target.id;
  const computerSelection = getComputerChoice();

  let win = false;
  if (playerSelection === "rock" && computerSelection === "scissors")
    win = true;
  else if (playerSelection === "paper" && computerSelection === "rock")
    win = true;
  else if (playerSelection === "scissors" && computerSelection === "paper")
    win = true;

  displayOutcome(playerSelection, computerSelection, win);

  return;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function displayOutcome(playerSelection, computerSelection, win) {
  const innerDiv = document.querySelector("#inner-container");

  console.log(`\nYou chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) {
    innerDiv.textContent = "Tie!";
  } else if (win === true) {
    pScore++;
    innerDiv.textContent = "Round Won!";
    playerScore.textContent = pScore;
  } else if (win === false && playerSelection != computerSelection) {
    cScore++;
    innerDiv.textContent = "Round Lost!";
    computerScore.textContent = cScore;
  }
}

let pScore = 0;
let cScore = 0;

const playerScore = document.querySelector("#left-container .score");
const computerScore = document.querySelector("#right-container .score");

playerScore.textContent = pScore;
computerScore.textContent = cScore;

const player = document.querySelectorAll("#player-side img");

player.forEach((node) => {
  node.addEventListener("click", playRound);
});
