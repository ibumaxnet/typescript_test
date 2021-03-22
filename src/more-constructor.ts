export {};

class Person {
	constructor(public name: string, protected age: number) {
	}
}

const hamu = new Person('はむさん', 43);

console.log(hamu);
