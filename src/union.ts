export { };

// 当然エラーがおこる
// let value: number = 1;
// value = 'hoge'

// 文字列も入れられるようにしたい！ってとき
let value: number | string = 1;
value = 'hoge'
