// Partial型は、型引数に指定したオブジェクトの型から、各プロパティの末尾に"?"をつけた型（全てのプロパティが必須でない型）を作成する。
// 参考 https://www.dkrk-blog.net/javascript/react_ts06
// これはOK
var Jiro = {
    name: 'jiro'
};
console.log(Jiro);
