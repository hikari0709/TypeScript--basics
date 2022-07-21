export { };

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const man: Pitcher1 = {
  throwingSpeed: 155,
};

// ▼下記はエラーになる エラーにならないように新しい型を定義する必要がある
const man2: Batter1 = {
  //throwingSpeed: 155,
  battingAverage: 0.367,
}

// throwingSpeed, battingAverage両方の型を持ったtypeを作るには下記の方法もあるが…
// type TowWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

// intersection型を利用することで既存の型を組み合わせて新しい型を作ることができる
type TowWayPlayer = Pitcher1 & Batter1;

// intersection型を利用して2つの値を持つ新しい定数を定義することができる
const man3: TowWayPlayer = {
  throwingSpeed: 155,
  battingAverage: 0.367,
}
