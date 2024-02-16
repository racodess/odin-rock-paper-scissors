function playRound(playerSelection, computerSelection){

	switch(playerSelection){

		case "rock":
			switch(computerSelection){
				case "paper":
					return `You Lose! ${computerSelection} beats ${playerSelection}`;
				case "scissors":
					return `You Win! ${playerSelection} beats ${computerSelection}`;
			default:
					return `It's a tie!`;
			}

		case "paper":
			switch(computerSelection){
				case "scissors":
					return `You Lose! ${computerSelection} beats ${playerSelection}`;
				case "rock":
					return `You Win! ${playerSelection} beats ${computerSelection}`;
			default:
					return `It's a tie!`;
			}

		case "scissors":
			switch(computerSelection){
				case "rock":
					return `You Lose! ${computerSelection} beats ${playerSelection}`;
				case "paper":
					return `You Win! ${playerSelection} beats ${computerSelection}`;
				default:
					return `It's a tie!`;
			}
	}
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
