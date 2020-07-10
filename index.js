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
    var num1 = 1;
    var num2 = lines[0];
    console.log(num1 * num2);
});
// 実行方法
// tsc ファイル名
// node ファイル名
// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
