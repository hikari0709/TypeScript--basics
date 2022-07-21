export { };
// イナム型

// 列挙型の enumは自動的に連番が付与される
enum Months {
  January,
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

// Months.January => 0, Months.February => 1
// console.log(Months.January);
// console.log(Months.February);


// 1月は0、12月は11と番号が振られてしまうので1月は1にしたい時はJanuaryに1を代入してオーバーライドする
enum Months2 {
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

// Months.January => 1, Months.February => 2
console.log(Months2.January);
console.log(Months2.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

// COLORS.YELLOW　でアクセスするとエラーになる
// 定義されていないことを検知してerrorを出してくれる

// 後から必要になったタイミングで追加することもできる
enum COLORS {
  YELLOW = '#FFFF00',
}
