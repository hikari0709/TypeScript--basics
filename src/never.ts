export { };

// 呼び元に戻ってこない場合の戻り値の型を指定するとき
function error(message: string): never {
  throw new Error(message)
}

try {
  error('text');
  console.log({ error });
} catch(error) {
  console.log({ error });
}

// voidはreturnされる値がない→呼び元にかえってくる
// neverは戻ってこない、例外を起こす場合はnever
