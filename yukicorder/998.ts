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
  const sortArr: number[] = arr.sort((a, b) => a - b)
  if (sortArr[1] - sortArr[0] === 1 && sortArr[2] - sortArr[1] === 1 && sortArr[3] - sortArr[2] === 1) {
    console.log('Yes');
  } else {
    console.log('No');
  }



});

// 実行方法
// tsc ファイル名 -w
// node ファイル名


// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
