function playGame(playerSelection, computerSelection, win) {
  console.log(`\nYou chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);

  if (playerSelection === computerSelection) console.log(`\nTie!`);
  else if (win === true) {
    console.log(`\nYou Win!`);
  } else if (win === false && playerSelection != computerSelection) {
    console.log(`\nYou Lose!`);
  }

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
