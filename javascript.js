function getPlayerChoice() {
	const choice = prompt("Rock, paper or scissors?");
	
	return choice;
}

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);

	return (choice === 0) ? "Rock" :
		(choice === 1) ? "Paper" :
		"Scissors";
}
