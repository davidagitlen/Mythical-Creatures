class Centaur{
	constructor(name, breed){
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.counter = 0;
	}
	shoot(){
		this.counter++;
		this.cranky = this.counter >= 3;
		if (this.cranky || this.layingDown) {
			return 'NO!';
		} else {
			return 'Twang!!!';
		}
	}

	run(){
		this.counter++;
		this.cranky = this.counter >= 3;
		return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
	}

	sleep() {
		if (this.standing) {
			return 'NO!';
		} else {
		this.cranky = false;
		this.counter = 0;
		return 'ZZZZ';
		}
	}

	layDown(){
		this.layingDown = !this.layingDown;
		this.standing = !this.standing;
	}
	standUp() {
		this.layingDown = !this.layingDown;
		this.standing = !this.standing;
	}

	drinkPotion() {
		if (!this.cranky) {
			this.cranky = !this.cranky
		} else {
		this.cranky = false;
		}
		if (this.layingDown === true) {
			return 'Not while I\'m laying down!';
			}
	}
}
module.exports = Centaur; 