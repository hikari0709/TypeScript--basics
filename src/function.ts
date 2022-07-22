export { };

// 関数の戻り値の方は（）の後に記述する
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

// console.log(bmi(1.7, 70));

// 無名関数にアノテーションをつける場合
const bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

// console.log(bmi2(1.7, 70));

// アロー関数の場合
const bmi3: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

// console.log(bmi3(1.7, 70));

// オプショナルなパラーメーターの定義 オプショナルな引数の有無でconsoleにlogが表示されるようにする
const bmi4: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
}

// console.log(bmi4(1.7, 70, true));

// デフォルトパラメーターを設定する JavaScriptの機能
const bmi5 = (height: number, weight: number = 60) => weight / (height * height);

// console.log(bmi5(1.7));

// Restパラメーターの設置 いくつ引数があるのかわからない時に設定する方法 JavaScriptの機能
const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
}

// console.log(sum(1, 2, 3, 4, 5));


// 関数をオーバーロードする

// シグネチャの定義
function double(value: number): number;
function double(value: string): string;

// function double(value: any): any {
//   if (typeof value === 'number') {
//     return value * 2;
//   } else if (typeof value === 'string') {
//     return value + value;
//   } else {
//     throw 'numberでもstringでもないので引数の型を確認してください。'
//   }
// }

// シグネチャで定義していない以外のものは弾かれるのでelseの例外処理は必要ない
// console.log(double(true)); // error

// さらに型制約（シグネチャ）で定義しているのはnumber型とstring型のみなのでelse ifで定義している分も必要なくなる
// 下記のコードでOK

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100)); // 200
console.log(double('Yes')); // YesYes
