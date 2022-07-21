export { };

// aliasesを作る時は先頭は大文字
type Mojiretsu = string;

const fooString: string = 'foo';
const fooString2: Mojiretsu = 'foo2';

const profle1 = {
  name: 'hikari',
  age: 30,
}

type Profile = {
  name: string;
  age: number;
}

const profle2: Profile = {
  name: 'hikari',
  age: 30,
}

type Profile2 = typeof profle1;
