export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'namaste';

type Example1 = {
	name: string;
	age: number;
};

const profile: Example1 = {
	name: 'ham',
	age: 43
}

// profile をもとに type を作成する
type Example3 = typeof profile;

const profile3: Example3 = {
	name: 'tottoko',
	age: 44
}
console.log(profile3);
