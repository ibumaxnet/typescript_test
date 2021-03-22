export {};

// * owner
// 	* 所有者
// 	* 初期化時に設定できる
// 	* 変更できない
// 	* 参照できる
// * secretNumber
// 	* 個人番号
// 	* 初期化時に設定できる
// 	* 変更できる
// 	* 参照できない

class MyNumberCard {
	private _owner: string;
	private _secretNumber: number;

	constructor(owner: string, secretNumber: number) {
		this._owner = owner;
		this._secretNumber = secretNumber;
	}

	// 参照専用のメソッド
	// 外からでも card.owner でアクセスできるように
	// private なので外から変更はできない
	get owner() {
		return this._owner;
	}

	// 書換専用のメソッド
	// 値を設定する
	set secretNumber(secretNumber: number) {
		this._secretNumber = secretNumber;
	}

	// 確認用メソッド
	debugPrint() {
		return `secretNumber: ${this._secretNumber}`;
	}
}


let card = new MyNumberCard('はむはん', 1234567890);
console.log(card.debugPrint());
// card.owner = "さむはん";
card.secretNumber = 9876543210;

console.log(card.debugPrint());
console.log(card.secretNumber);
