"use strict";
exports.__esModule = true;
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
    lines.push(line);
});
reader.on('close', function () {
    var input = parseInt(lines[0]);
    var remainder = input % 2;
    var answer = remainder == 0 ? input / 2 : (input + 1) / 2;
    console.log(answer);
});
// 実行方法
// tsc ファイル名
// node ファイル名
// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
