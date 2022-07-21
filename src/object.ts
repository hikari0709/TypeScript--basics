export { };

let profile1: object = { name: 'hikari' };
// profile1 = { age: 30 };
// 中身が入れ替わってもエラーが起きない
// objectに対してany型を指定するのと等しい書き方

// 下記で書くとプロパティにも型を指定することができる
let profile2: {
  name: string;
} = { name: 'hikari' }
// error profile2 = { age: 30 };
