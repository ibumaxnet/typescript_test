export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
	height: number,
	weight:number,
	printable?: boolean
):number => {
	const bmiScore =  weight / (height * height);
	if(printable) {
		console.log('bmi:', bmiScore);
	}
	return bmiScore;
};


// bmi(身長, 体重, 表示するかどうか)
bmi(165,62,true);
