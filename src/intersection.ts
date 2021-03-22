export {};

type Pitcher1 = {
	throwingSpeed: number;
}

type Batter1 = {
	battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
	throwingSpeed: 154
}

const Ichiro: Batter1 = {
	battingAverage: 0.398
}

// type TwoWayPlayer = {
// 	throwingSpeed: number;
// 	battingAverage: number;
// }


// type を合成して新しい type を作る
type TwoWayPlayer = Pitcher1 & Batter1;


const OotaniShohei: TwoWayPlayer = {
	throwingSpeed: 164,
	battingAverage: 0.298
}



console.log(typeof(OotaniShohei));
console.log(OotaniShohei);
