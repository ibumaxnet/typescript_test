export {};

let profile: object = { name: 'ham'};
profile = { birthYear : 1976 };

let profile2: { name: string; } = { name : 'ham' };
profile2 = { name: 'cooki'}

let profile3: {
	name: string;
	age: number;
} = {
	name: 'ham',
	age: 50
}


console.log(profile3);
