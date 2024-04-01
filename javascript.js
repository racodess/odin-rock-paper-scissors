function playRound(event) {
  const playerSelection = event.target.id;
  const computerSelection = getComputerChoice();

  let win = false;
  if (playerSelection === "rock" && computerSelection === "scissors")
    win = true;
  else if (playerSelection === "paper" && computerSelection === "rock")
    win = true;
  else if (playerSelection === "scissors" && computerSelection === "paper")
    win = true;

  displayOutcome(playerSelection, computerSelection, win);
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function animateComputerChoice(computerSelection) {
  const selector = "#" + "c-" + computerSelection;
  const img = document.querySelector(selector);

  img.style.height = "300px";
  img.style.transition = "0.1s";
}

function resetAnimations() {
  const img = document.querySelectorAll("#computer-side img");

  img.forEach((node) => {
    node.style.height = "200px";
  });
}

function displayOutcome(playerSelection, computerSelection, win) {
  const innerDiv = document.querySelector("#inner-container");

  if (playerSelection === computerSelection) {
    innerDiv.textContent = "Tie!";
    animateComputerChoice(computerSelection);
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
  node.addEventListener("click", resetAnimations);
  node.addEventListener("click", playRound);
});
