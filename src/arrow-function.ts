export {};

// アロー関数
let bmi: (height: number, weight: number) => number = (
	height: number,
	weight: number
):number => {
	return weight / (height * height);
};

// アロー関数
let bmi2: (height: number, weight: number) => number = (
	height: number,
	weight: number
):number => weight / (height * height);


console.log(bmi2(1.65,62));
