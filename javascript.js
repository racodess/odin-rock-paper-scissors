function playGame(playerSelection, computerSelection, win) {
  console.log(`\nYou chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  let win = playRound(playerSelection, computerSelection);
  if (playerSelection === computerSelection) console.log(`\nIt's a tie!`);
  else if (win === true) {
    ++playerScore;
    console.log(`\nYou Win! ${playerSelection} beats ${computerSelection}`);
  } else if (win === false && playerSelection != computerSelection) {
    ++computerScore;
    console.log(`\nYou Lose! ${computerSelection} beats ${playerSelection}`);
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

  let win = playRound(playerSelection, computerSelection);
  playGame(playerSelection, computerSelection, win);
});
