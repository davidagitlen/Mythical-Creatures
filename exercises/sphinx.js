class Sphinx{
	constructor(){
		this.name = null;
		this.riddles = [];
		this.riddle = {};
		this.heroesEaten = 0;
		this.incorrectAnswers = 0;
	}
	collectRiddle(riddle){
		this.riddles.push(riddle);
		if (this.riddles.length >= 4) {
			this.riddles.shift();
		}
	}
	attemptAnswer(answer) {
	var answerObj = this.riddles.find(function(object){
		return object.answer === answer;
	})
	if (answerObj === undefined) {
		this.heroesEaten++
		return;
	}
	var answerIndex = this.riddles.indexOf(answerObj);
	this.riddles.splice(answerIndex, 1);
	if (this.riddles.length === 0) {
			return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
	}
	return `That wasn\'t that hard, I bet you don\'t get the next one`;
	}
}

module.exports = Sphinx; 