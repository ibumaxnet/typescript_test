export {};

const reducer: (accum: number, curval:number) => number = (accum: number, curval:number): number => {
	return accum + curval;
};

const sum: (...values: number[]) => number = (...values: number[]):number => {
	return values.reduce(reducer);
}

console.log(sum(1,3,5,7,9));
