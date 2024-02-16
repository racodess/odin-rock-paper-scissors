function playGame(){
	let playerScore, computerScore;

	for(let i = 0; i < 5; ++i){
		playerScore = 0;
		computerScore = 0;
		
		console.log(playRound(getPlayerChoice(), getComputerChoice()));

	}
}

function playRound(playerSelection, computerSelection){
	let win = false;

	if (playerSelection === "rock" && computerSelection === "scissors")
		win = true;
	else if (playerSelection === "paper" && computerSelection === "rock")
		win = true;
	else if (playerSelection === "scissors" && computerSelection === "paper")
		win = true;

	return win;
}

function getPlayerChoice() {
	const choice = prompt("Rock, paper or scissors?").toLowerCase();
	
	return choice;
}

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);

	return (choice === 0) ? "rock" :
		(choice === 1) ? "paper" :
		"scissors";
}
