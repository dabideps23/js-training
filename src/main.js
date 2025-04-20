/**
 * const,let等の変数宣言
 */
// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数を上書き';
// console.log(val1);

// //　var変数は再宣言可能
// var val1 = 'var変数を再宣言';
// console.log(val1);

// let let1 = 'let変数';
// console.log(let1);

// // let変数は上書き可能
// let1 = 'let変数を上書き';
// console.log(let1);

// //　let変数は再宣言不可能
// // let let1 = 'let変数を再宣言';
// // console.log(let1);



// const const1 = 'const変数';
// console.log(const1);

// // // const変数は上書き不可能
// // const1 = 'const変数を上書き';
// // console.log(const1);

// // //　cconst変数は再宣言不可能
// // const const1 = 'const変数を再宣言';
// // console.log(const1);


// //const で定義したオブジェクトはプロパティの変更が可能
// const const2 = {
//   name: "ほげ",
//   age: 25
// }
// console.log(const2);

// //宣言済みのプロパティを更新
// const2.name = "hoge";
// console.log(const2);

// //宣言していなかったプロパティを追加
// const2.address = "okinawa";
// console.log(const2);


// //const で定義した配列はプロパティの変更が可能
// const const3 = ["dog", "cat"];
// console.log(const3);

// //配列に定義済みの要素を上書き
// const3[0] = "bird";
// console.log(const3);

// //配列に要素を追加
// const3.push("monkey");
// console.log(const3);


/**
 * テンプレート文字列
 */
// const name = "ほげ";
// const age = 25;

// // 「私の名前はほげです。年齢は25歳です。」と表示したい場合

// //古いやり方
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);


/**
 * アロー関数
 */

//従来の関数宣言（関数を作るのみ）
function func1(str){
  return str;
}
console.log(func1("ふぁんくわん！"));

//従来の関数宣言（関数を変数に格納）
const func2 = function aaa(str){
  return str + str;
}
console.log(func2("ふぁんくつー！"));

//アロー関数
const func3 = (str) => {
  return str + str + str;
}
console.log(func3("ふぁんくすりー！"));

//アロー関数（引数のカッコを省略）
const func4 = str => {
  return str + str + str + str;
}
console.log(func4("ふぁんくふぉー！"));

//アロー関数（処理のカッコと return を省略）
const func5 = str => str + str + str + str + str;
console.log(func5("ふぁんくふぁいぶ！"));

//アロー関数練習
const func6 = (num1, num2) => num1 + num2;
console.log(func6(1,9));
console.log(func6("1","9"));

//アロー関数練習（オブジェクト返却）
const func7 = (num1, num2) => ({
  hoge:num1,
  huga:num2
})
console.log(func7(1,9));