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
    var input = lines[0];
    var arr = input.split(' ').map(function (str) { return parseInt(str, 10); });
    var sortArr = arr.sort(function (a, b) { return a - b; });
    if (sortArr[1] - sortArr[0] === 1 && sortArr[2] - sortArr[1] === 1 && sortArr[3] - sortArr[2] === 1) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
});
// 実行方法
// tsc ファイル名 -w
// node ファイル名
// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
