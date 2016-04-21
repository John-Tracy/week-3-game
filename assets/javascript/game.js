


// game object

var hangGame = {

	wordBank: ['americano','latte','cappucino','espresso','macchiato','cubano','turkish'],
	theWord: '',
	wins: 0,
	losses: 0,
	lives: 9,
	theDash: '_ ',
	lettersGuessed: [],

	computerChoice: function() {
		this.theWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)].toUpperCase();

		for (i = 0; i < this.Word; i++) {

		}

		
	},

	displayDash: function() {

		
	}

	letterCompare: function(theWord) {
		


	}

	};

$(document).ready(function(){

	 hangGame.computerChoice();
	console.log(hangGame.theWord);

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		console.log(userGuess);

		hangGame.letterCompare(userGuess);

	};





});










