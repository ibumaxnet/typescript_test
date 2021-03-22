export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

if(typeof numberUnknown === 'number'){
	let sumUnknown = numberUnknown + 20;
	console.log(sumUnknown);
}

console.log(typeof(sumAny));
console.log(sumAny);

