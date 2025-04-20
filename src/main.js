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

// //従来の関数宣言（関数を作るのみ）
// function func1(str){
//   return str;
// }
// console.log(func1("ふぁんくわん！"));

// //従来の関数宣言（関数を変数に格納）
// const func2 = function aaa(str){
//   return str + str;
// }
// console.log(func2("ふぁんくつー！"));

// //アロー関数
// const func3 = (str) => {
//   return str + str + str;
// }
// console.log(func3("ふぁんくすりー！"));

// //アロー関数（引数のカッコを省略）
// const func4 = str => {
//   return str + str + str + str;
// }
// console.log(func4("ふぁんくふぉー！"));

// //アロー関数（処理のカッコと return を省略）
// const func5 = str => str + str + str + str + str;
// console.log(func5("ふぁんくふぁいぶ！"));

// //アロー関数練習
// const func6 = (num1, num2) => num1 + num2;
// console.log(func6(1,9));
// console.log(func6("1","9"));

// //アロー関数練習（オブジェクト返却）
// const func7 = (num1, num2) => ({
//   hoge:num1,
//   huga:num2
// })
// console.log(func7(1,9));

/**
 * 分割代入
 */

// //オブジェクト宣言
// const myProfile = {
//   name: "hoge",
//   age: 21
// };

// //メッセージ作成
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // 毎回myProfileって書くのだるいよね。
// const {name, age} = myProfile;
// // myProfile から、プロファイル名の変数を取得してる。下記のようなイメージ
// // const name = myProfile.name;
// // const age = myProfile.age;

// //メッセージ作成
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);


// //配列の宣言
// const myProfile = ["ほげ", 25];

// //メッセージ作成
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);


// // 毎回myProfile[n]って書くのだるいよね。わかりにくいし。
// const [nameZero, ageOne] = myProfile;
// // myProfile から、配列の位置の値を取得してる。なお命名は[]の中の変数になる。下記のようなイメージ
// // const nameZero = myProfile[0];
// // const ageOne = myProfile[1];

// //メッセージ作成
// const message4 = `名前は${nameZero}です。年齢は${ageOne}歳です。`;
// console.log(message4);

// //お試し、、ageだけ取りたい。
// const [, age2] = myProfile;
// console.log(age2);
// //お試し、、設定されていない場所を取ろうとすると、、？
// const [, , huga] = myProfile;
// console.log(huga); //undefined


/**
 * デフォルト値（引数、分割代入）
 */

// //関数の宣言
// const sayHello = (name) => console.log(`こんにちは！${name}さん`);

// //関数呼び出し
// sayHello("太郎"); //こんにちは！太郎さん

// //引数なしで関数呼び出し
// sayHello(); //こんにちは！undefinedさん

// //デフォルト引数ありの関数の宣言
// const sayHello2 = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);

// //関数呼び出し
// sayHello2("太郎"); //こんにちは！太郎さん

// //引数なしで関数呼び出し
// sayHello2(); //こんにちは！ゲストさん


// const myProfile = {
//   age: 25
// }

// //分割代入
// const { age, name } = myProfile;
// //undefined
// console.log(name);
// //25
// console.log(age);


// const myProfile1 = {
//   age1: 25
// }

// //デフォルト引数ありの分割代入
// const { age1 = 0, name1 = "ゲスト" } = myProfile1;
// //ゲスト
// console.log(name1);
// //25
// console.log(age1);


/**
 * オブジェクトの省略記法
 */


// // 1.変数を用意
// const name = "太郎";
// const age = 25;

// // 2.変数を元にオブジェクトを用意
// const myProfile = {
//   name: name,
//   age: age
// }

// // 3.作成したオブジェクトを用意
// console.log(myProfile);

// // name:name とか書くの面倒だよね。

// // 2.変数を元にオブジェクトを用意（省略記法）
// const myProfile2 = {
//   name,
//   age
// }

// // 3.作成したオブジェクトを用意
// console.log(myProfile2);

// // お試し、こんな書き方もできそう（めちゃくちゃ分割代入とにてる、、、）
// const myProfile3 = { name, age };

// //分割代入はこれ。。
// // const {name, age} = myProfile3;


/**
 * スプレッド構文
 */

//配列の展開
const array1 = [1,2];
console.log(array1);
console.log(...array1); //配列を全て展開して表示
//使用イメージ
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(array1[0], array1[1]); // => 3
sumFunc(...array1); // => 3

// まとめる
const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array3] = array2;
// 0番目の要素はnum1、1番目の要素はnum2、それ以降はarray3にまとめうる。
console.log(num1);
console.log(num2);
console.log(array3);

//配列のコピー、結合
const array4 = [10, 20];
const array5 = [30, 40];
//array4をarray6にコピー
const array6 = [...array4];
console.log(array6); // [10, 20]
//array4とarray5をarray7に結合する。
const array7 = [...array4, ...array5];
console.log(array7); // [10, 20, 30, 40]
//コピーなら、単純にこれでいんじゃね？ 
const array8 = array4;
console.log(array8); // [10, 20]
//このあと、array8を変更
array8[0] = 100;
console.log(array8); // [100, 20]
//array4の参照を引き継いでいるため、バグ発生!!
console.log(array4); // [100, 20]
//スプレッド構文だと大丈夫なのか？
const array9 = [...array5];
console.log(array9); // [30, 40]
//このあと、array9を変更
array9[0] = 300;
console.log(array9); // [300, 40]
console.log(array5); // [30, 40]



