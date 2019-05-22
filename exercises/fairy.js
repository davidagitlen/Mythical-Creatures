class Fairy{
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
	}

	receiveBelief() {
		this.dust++;
	}
	believe() {
		this.dust += 10;
	}
	makeDresses(array) {
		for (var i = 0; i < array.length; i++){
			this.clothes.dresses.push(array[i]);
		}
	}
	provoke() {
		this.disposition = 'Vengeful';
	}
	replaceInfant(victim) {
		if (this.disposition !== 'Vengeful'){
			return victim;
		}
		if (this.disposition === 'Vengeful'){
		victim.disposition = 'Malicious';
		this.humanWards.push(victim);
		} if (this.humanWards.length >= 3) {
			this.disposition = 'Good natured';
		}
	}
}			

module.exports = Fairy; 