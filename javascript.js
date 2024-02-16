function playGame(){
	let playerScore, computerScore;
	let playerChoice, computerChoice;

	playerScore = 0;
	computerScore = 0;
	
	for(let i = 0; i < 5; ++i){
		playerChoice = getPlayerChoice();
		computerChoice = getComputerChoice();
		
		console.log(`You chose: ${playerChoice}`);
		console.log(`Computer chose: ${computerChoice}\n`);

		let outcome = playRound(playerChoice, computerChoice);
		if (playerChoice === computerChoice)
			console.log(`It's a tie!\n`);
		else if (outcome === true){
			++playerScore;
			console.log(`You Win! ${playerChoice} beats ${computerChoice}\n`);
		}
		else if (outcome === false && playerChoice != computerChoice){
			++computerScore;
			console.log(`You Lose! ${computerChoice} beats ${playerChoice}\n`);
		}
	}

		return `\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`;
}

function playRound(playerSelection, computerSelection){
	let win = false;

	if ((playerSelection === "rock") && (computerSelection === "scissors"))
		win = true;
	else if ((playerSelection === "paper") && (computerSelection === "rock"))
		win = true;
	else if ((playerSelection === "scissors") && (computerSelection === "paper"))
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

playGame()
