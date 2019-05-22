class Wizard{
	constructor(wizard){
		this.name = wizard.name; 
		if (wizard.bearded !== undefined) {
		this.bearded = wizard.bearded}
		else {
			this.bearded = true;
		}
		this.phrase = undefined;
		this.rested = true;
		this.castCount = 0;
	}
	
	incantation(phrase) {
		return phrase.toUpperCase();
			}
	cast() {
		this.castCount++;
		if(this.castCount >= 3) {
			this.rested = false;
			return 'I SHALL NOT CAST!';
		}
		return 'MAGIC BULLET';
	}
}

module.exports = Wizard; 