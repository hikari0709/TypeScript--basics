export { };

class Person {
  // 1つの定義をメンバー
  // 定義の前にpublic, praivateを追加することで23行目consoleではエラーになる
  // 外部からのアクセスはできないが、constructorの内部thisではageにアクセスすることができる
  // publicはあえて書く必要がない
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // new演算子でclassでインスタンスを生成する時に呼び込まれるメソッド constructor
  // constructorはreturnしないので型の定義は書かないのが言語仕様で決まっている。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // superは親と同じconstructorを呼ぶことができる。親classと同じもをの引数として渡す
    super(name, age, nationality);
  }

  profile(): string {
    // ageを親classでprivateのアクセス修飾子を付けている場合アクセスできずerrorになる→protectedに修正
    // nationalityはprotectedのアクセス修飾子を利用しているので継承した子classからもアクセスすることができる
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}


let man = new Person('man1', 30, 'Japan');

// console.log(man.profile());
// console.log(man.name);
// console.log(man.age);



// class Preson2 {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// classの記述を簡略化する。TypeScriptはconstructorにアクセス修飾子を書くことで初期化まで自動でやってくれる
// 上のPerson2と同じことができてしまう。
class Preson2 {
  constructor(public name: string, protected age: number) { }
}

// const me = new Preson2('ひかり', 32);
// console.log(me);


// getter setter
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getやsetを関数の前に記述することでprivateで宣言したメンバーへのアクセスや値の変更を可能にする
  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debug() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ひかり', 1234567890)
// console.log(card.debug());
// card.secretNumber = 1111111111;
// console.log(card.debug());

// read only
// class VisaCard {
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }

// readonlyの場合はpublicを書かなくても良い
// readonlyは読み込み限定で、読み込めることはアクセスはできることが前提にあるため
// publicを省略できるのはreadonly限定。あまりTypeScriptがわからない人が見た時にpublicが指定されていないとわかりずらいことも考えられる
class VisaCard {
  constructor(public readonly owner: string) { }
}

let myVisaCard = new VisaCard('ひかり');
// myVisaCard.owner = 'てる'; ownerがreadonlyになっているのでerrorになる

// console.log(myVisaCard);

// 静的メンバの定義 staticをつける
class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'firstName';
  static lastName: string = 'lastName';

  static work() {
    return `${this.firstName}, Ttype Script`;
  }
}

// let me = new Me();
// console.log(me);

// 静的メンバへのアクセス
// console.log(Me.work());


// namespace を利用することで同じファイル内に同じclass名のclassを定義することができる
namespace A {
  export class Person3 {
    constructor(public name: string) {

    }
  }
}

namespace B {
  export class Person3 {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string) { }
  }
}

// namespaceは入れ子もできる
namespace C {
  export namespace CA {
    export class Person3 {
      constructor(public firstName: string) { }
    }
  }

  export namespace CB {
    export class Person3 {
      constructor(public firstName: string) { }
    }
  }
}

// const me = new A.Person3('ひかり');
const me = new C.CA.Person3('ひかり');
// console.log(me);


// classの継承
class Animal {
  constructor(public name: string) { }
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  // constructorに書くのではなく外に出してあげる
  public speed: number;

  // nameの初期化は親のclassでやるのでpublicを省略してsuperで親で初期化、speedはここで初期化
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    // 親classのrunメソッドを実行することができる
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
// console.log(new Animal('Mickey').run());
// console.log(new Lion('Simba', 80).run());

class Mahoutsukai { }
class Souryo { }

// classは1つしか継承できない。下記はエラー
// class Taro extends Mahoutsukai, Souryo {}

// ただ、interfaceは多重継承のようなことができる。
// interface Kenja {
//   ionazun(): void;
// }
// interface Senshi {
//   kougeki(): void;
// }
// この状態だとJiro classでinterfaceで定義したプロパティが実装されていないよーってエラーが起きる。→実装忘れがなくなる
// class Jiro implements Kenja, Senshi { }

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
