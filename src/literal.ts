export { };

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';

// 曜日を入れたいのに数字が文字列として入って欲しくない
dayOfTheWeek = '31';

// 文字列のliteral型「日」で指定することでその後意図しない文字列が入ることを防ぐ
let dayOfTheWeek2: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek2 = '月';
// error dayOfTheWeek2 = '31';

// 数値のliteral型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// error month = 13;
