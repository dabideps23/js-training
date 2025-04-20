/**
 * const,let等の変数宣言
 */
var val1 = 'var変数';
console.log(val1);

// var変数は上書き可能
val1 = 'var変数を上書き';
console.log(val1);

//　var変数は再宣言可能
var val1 = 'var変数を再宣言';
console.log(val1);

let let1 = 'let変数';
console.log(let1);

// let変数は上書き可能
let1 = 'let変数を上書き';
console.log(let1);

//　let変数は再宣言不可能
// let let1 = 'let変数を再宣言';
// console.log(let1);



const const1 = 'const変数';
console.log(const1);

// // const変数は上書き不可能
// const1 = 'const変数を上書き';
// console.log(const1);

// //　cconst変数は再宣言不可能
// const const1 = 'const変数を再宣言';
// console.log(const1);


//const で定義したオブジェクトはプロパティの変更が可能
const const2 = {
  name: "ほげ",
  age: 25
}
console.log(const2);

//宣言済みのプロパティを更新
const2.name = "hoge";
console.log(const2);

//宣言していなかったプロパティを追加
const2.address = "okinawa";
console.log(const2);


//const で定義した配列はプロパティの変更が可能
const const3 = ["dog", "cat"];
console.log(const3);

//配列に定義済みの要素を上書き
const3[0] = "bird";
console.log(const3);

//配列に要素を追加
const3.push("monkey");
console.log(const3);
