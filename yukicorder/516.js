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
    // 入力して作られた配列をfilterして赤色の配列を作ることで、赤色と青色の数判定をできるようにする
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
