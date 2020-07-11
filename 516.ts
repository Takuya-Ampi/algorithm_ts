export { }
const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const arr: string[] = lines
  const redArr:string[] = arr.filter((value: string): boolean => {
    return value.length == 3
  })
  if (redArr.length >= 2) {
    console.log('RED');
  } else {
    console.log('BLUE');
  }
});

// 実行方法
// tsc ファイル名 -w
// node ファイル名


// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
