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
    var men = arr[0];
    var women = arr[1];
    var result = women >= men + 1 ? true : false;
    if (result) {
        console.log('YES');
        console.log(women - (men + 1));
    }
    else {
        console.log('NO');
        console.log((men + 1) - women);
    }
});
// 実行方法
// tsc ファイル名 -w
// node ファイル名
// ./node_modules/.bin/ts-node ファイル名
// 例1
// ./node_modules/.bin/ts-node index.ts
