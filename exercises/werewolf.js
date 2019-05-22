class Werewolf{
	constructor(name, location) {
		this.name =name; 
		this.location = location; 
		this.human = true;
		this.wolf = false; 
		this.hungry = false;
	}

	change(){
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
	}

	eat(victim){
		if (this.hungry){
			victim.alive = false;
			this.hungry = !this.hungry;
			this.human = !this.human;
		}
	}
}

module.exports = Werewolf; 