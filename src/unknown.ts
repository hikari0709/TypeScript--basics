export { };

const hoge = (): number => 30;

let numberAny: any = hoge();
let sumAny = numberAny + 10;

let numberUnknown: unknown = hoge();

// ▼typeがわからないものを計算できないよーってエラーが出る
// let sumUnknown = sumUnknown + 10;

// タイプガードという記述方法で実装する
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
