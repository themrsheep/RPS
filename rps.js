//note that this is called "catching the dumb"!
var userScore_div = document.getElementById("userScore");
var compScore_div = document.getElementById("compScore");
var sentence_h2 = document.getElementById("sentence");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");
var score_h3 = document.getElementById("score");

rock_div.addEventListener('click', () => game('r'));
paper_div.addEventListener('click', () => game('p'));
scissor_div.addEventListener('click', () => game('s'));

var userScore = 0;
var compScore = 0;

function compChoice() {
	var compHands = ['r', 'p', 's'];
	return compHands[Math.floor(Math.random()*3)];
};

const hands = {
	'r':'rock',
	'p':'paper',
	's':'scissors'
};

function game(userChoice) {
	var match = userChoice+compChoice();
	switch(match) {
		case 'rr':
		case 'pp':
		case 'ss':
			draw(match[0], match[1]);
			break;
		case 'rp':
		case 'sr':
		case 'ps':
			lose(match[0], match[1]);
			break;
		case 'pr':
		case 'rs':
		case 'sp':
			win(match[0], match[1]);
			break;
		};
};

function win(uC, cC) {
	sentence_h2.innerHTML = `${hands[uC]} beats ${hands[cC]}. You win!`;
	userScore++;
	userScore_div.innerHTML = userScore;
	document.getElementById(hands[uC]).classList.add('green-glow');
	setTimeout(function() {document.getElementById(hands[uC]).classList.remove('green-glow');}, 150);
};

function lose(uC, cC) {
	sentence_h2.innerHTML = `${hands[uC]} loses to ${hands[cC]}. You lose.`;
	compScore++;
	compScore_div.innerHTML = compScore;
	document.getElementById(hands[uC]).classList.add('red-glow');
	setTimeout(function() {document.getElementById(hands[uC]).classList.remove('red-glow');}, 150);
};

function draw(uC, cC) {
	sentence_h2.innerHTML = `${hands[uC]} is equal to ${hands[cC]}. It's a draw.`;
	document.getElementById(hands[uC]).classList.add('gray-glow');
	setTimeout(function() {document.getElementById(hands[uC]).classList.remove('gray-glow');}, 150);
};












