export {};

type ObjectType = {
	name: string;
	age: number;
}

let object: ObjectType = {
	name: 'ham',
	age: 43
}

interface ObjectInterface {
	name: string;
	age: number;
}

let object2: ObjectInterface = {
	name: 'tottoko',
	age: 55
}


console.log(object2);
