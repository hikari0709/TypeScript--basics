export { };

let numbers: number[] = [1, 2, 3];

// 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nigigenhairetsu: number[][] = [
  [50, 100],
  [150, 300]
]

// 配列の要素がバラバラの場合（共用型 uniontypes）
let hairetsu: (string | number | boolean)[] = [1, false, 'pan']
