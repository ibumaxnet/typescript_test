export {};

function error_func(message: string): never {
	throw new Error(message);
}

try {
	let results = error_func('testですか');
	console.log({results}, "ですよ");
} catch(error) {
	console.log({error});
}
