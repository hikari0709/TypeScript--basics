export { };

let fooCompatible: any;
let barCompatile: string = 'TypeScript';

// 出力：undefind
// console.log(typeof fooCompatible);

// 代入してエラーが発生しない→型の互換性があるといえる
fooCompatible = barCompatile;

// 出力：string any型のものにstring型を代入するとstring型に変わる
// console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// number型を代入できないよーってエラーになる
// fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

// 文字列リテラル型は文字列型（集合）の一部という扱いになるためエラーにならない
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

// 数値リテラル型は数値型（集合）の一部という扱いになるためエラーにならない
fooNumber = fooNumberLiteral;

// 構造的部分型
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) { }
}

let me: Animal;
me = new Person(32, 'hikari');
// console.log(me);

// ジェネリクス　汎用的なclassやメソッドに対して特定の型を紐づけるための仕組み
// 下記のような型はちがうけど、同じ処理をしているものを1つにしたい時に利用できる
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// }

// Tは型引数と呼ばれ、慣習的にTが利用される
const echo = <T>(arg: T): T => {
  return arg;
};

// console.log(echo<number>(100));
// console.log(echo<string>('Hello'));
// console.log(echo<boolean>(true));

// classをジェネリクスで定義する
class Mirror<T> {
  constructor(public value: T) { }

  echo(): T {
    return this.value;
  }
}

// console.log(new Mirror<number>(123).echo());
// console.log(new Mirror<string>('Hello').echo());
// console.log(new Mirror<boolean>(true).echo());

// 型アサーション　型の変換（型に互換性がある場合に限る）

let name: any = 'hikari';
// let length = name.length;

// 型アサーション
// let length = name.length as number;

// name自体をアサーションする
let length = (name as string).length;

// 上と同じ効果を得られるが非推奨。JSXの記法とよく似ているため
// let length = (<string>name).length;
