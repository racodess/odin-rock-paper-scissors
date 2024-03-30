function playGame() {
  let playerScore, computerScore;
  let playerChoice, computerChoice;

  playerScore = 0;
  computerScore = 0;

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();

  console.log(`\nYou chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  let outcome = playRound(playerChoice, computerChoice);
  if (playerChoice === computerChoice) console.log(`\nIt's a tie!`);
  else if (outcome === true) {
    ++playerScore;
    console.log(`\nYou Win! ${playerChoice} beats ${computerChoice}`);
  } else if (outcome === false && playerChoice != computerChoice) {
    ++computerScore;
    console.log(`\nYou Lose! ${computerChoice} beats ${playerChoice}`);
  }

  console.log(
    `\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`,
  );

  return;
}

function playRound(playerSelection, computerSelection) {
  let win = false;

  if (playerSelection === "rock" && computerSelection === "scissors")
    win = true;
  else if (playerSelection === "paper" && computerSelection === "rock")
    win = true;
  else if (playerSelection === "scissors" && computerSelection === "paper")
    win = true;

  return win;
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

document.body.addEventListener("click", (event) => {
  let target = event.target;
  let playerSelection = "";
  let computerSelection = getComputerChoice();

  switch (target.id) {
    case "rock":
      playerSelection = "rock";
      break;
    case "paper":
      playerSelection = "paper";
      break;
    case "scissors":
      playerSelection = "scissors";
      break;
  }

  playRound(playerSelection, computerSelection);
});
