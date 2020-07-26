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
    if (input === 0 || input === 4 || input === 10) {
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
