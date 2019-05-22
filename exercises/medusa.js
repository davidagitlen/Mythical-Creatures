class Medusa{
	constructor(name){
		this.name = name;
		this.statues = [];
	}
	stare(victim){
		this.statues.push(victim);
		victim.stoned = true;
		if (this.statues[3]) {
			this.statues[0].stoned = false;
			this.statues.shift(); 
		}
	}

};

module.exports = Medusa;