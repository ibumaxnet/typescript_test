export {};

class VisaCard {
	readonly owner: string;

	constructor(owner: string) {
		this.owner = owner;
	}
}

class VisaCard2 {
	constructor(public readonly owner: string) {
		this.owner = owner;
	}
}

let myVisaCard = new VisaCard('はむさん');
let myVisaCard2 = new VisaCard2('ひむさん');

myVisaCard.owner = 'べいこん';
myVisaCard2.owner = 'なまはむ';

console.log(myVisaCard);
console.log(myVisaCard2);

