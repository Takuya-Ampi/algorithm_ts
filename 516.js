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
    var arr = lines;
    var redArr = arr.filter(function (value) {
        return value.length == 3;
    });
    if (redArr.length >= 2) {
        console.log('RED');
    }
    else {
        console.log('BLUE');
    }
});
// 実行方法
// tsc ファイル名 -w
// node ファイル名
// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
