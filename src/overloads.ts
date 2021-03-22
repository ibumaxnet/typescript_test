export {};

// シグネチャー で型の制約をする
function double(value: number): number;
function double(value: string): string;

// function double(value: number): number {
// 	return value * 2;
// }

// function double(value: string): string {
// 	return value + value;
// }

// 関数の実体では型によって処理を変える
function double(value: any): any {
	// console.log(typeof(value));
	if(typeof(value) === 'number') { // number型 の処理
		return value * 2;
	} else { // シグネチャーで制約しているのでそれ以外は string型 の処理
		return value + value;
	}
}


console.log(double(100));
console.log(double('ike '));

// 書きを実行するとエラーになる
// シグネチャーで number型,string型 と制約しているので
console.log(double(true));
