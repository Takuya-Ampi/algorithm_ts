export {}
const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const num1: number = 1
  const num2: number = lines[0]
  console.log(num1 * num2)
});

// 実行方法
// tsc ファイル名 -w
// node ファイル名


// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
