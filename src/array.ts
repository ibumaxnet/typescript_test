export {};

// 数字を使用する配列
let numbers: number[] = [1, 2, 3];

// 下記の書き方もできます
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['tokyo', 'osaka', 'kyoto'];


// stringを使用する配列
let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];


// 連想配列
let nijigenHairetsu: number[][] = [
	[50, 100],
	[10, 20]
];


// 共用型
let hsiretsu: (string | number | boolean)[][] = [1, false, 'nihon'];
