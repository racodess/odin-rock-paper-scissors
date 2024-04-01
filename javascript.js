function playRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();

  let win = false;
  if (playerSelection === "p-rock" && computerSelection === "c-scissors")
    win = true;
  else if (playerSelection === "p-paper" && computerSelection === "c-rock")
    win = true;
  else if (playerSelection === "p-scissors" && computerSelection === "c-paper")
    win = true;

  displayOutcome(playerSelection, computerSelection, win);

  return;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  return choice === 0 ? "c-rock" : choice === 1 ? "c-paper" : "c-scissors";
}

function animateComputerChoice(computerSelection) {
  const selector = "#" + computerSelection;
  const img = document.querySelector(selector);

  img.style.height = "300px";
  img.style.transition = "0.1s";
}

function displayOutcome(playerSelection, computerSelection, win) {
  const innerDiv = document.querySelector("#inner-container");

  if (playerSelection === computerSelection) {
    innerDiv.textContent = "Tie!";
  } else if (win === true) {
    pScore++;
    innerDiv.textContent = "Round Won!";
    playerScore.textContent = pScore;
    animateComputerChoice(computerSelection);
  } else if (win === false && playerSelection != computerSelection) {
    cScore++;
    innerDiv.textContent = "Round Lost!";
    computerScore.textContent = cScore;
    animateComputerChoice(computerSelection);
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
