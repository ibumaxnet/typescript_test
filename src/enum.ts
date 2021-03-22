export {};

enum Months {
	January = 1,
	February,
	March,
	April,
	May,
	Jun,
	July,
	August,
	September,
	October,
	November,
	December
}

Months.January;

// console.log(Months.May);
// console.log(Months.September);
// console.log(Months);

enum COLORS {
	RED = '#ff0000',
	WHITE = '#ffffff',
	GREEN = '#008800',
	BLUE = '#0000FF',
	BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// enum型に追加する
enum COLORS {
	YELLOW = '#ffff00',
	GREY = '#808080'
}

let yellow = COLORS.YELLOW;
console.log({ yellow });
console.log(COLORS);
