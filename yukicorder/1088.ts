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
  const input: string = lines[0]
  const arr: number[] = input.split(' ').map(str => parseInt(str, 10))
  const sum: number = arr.reduce((a, b) => {
    return a + b
  })
  console.log(sum);
});

// 実行方法
// tsc ファイル名 -w
// node ファイル名


// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
