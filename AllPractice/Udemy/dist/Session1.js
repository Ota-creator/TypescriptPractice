"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
//型推論
let one = 1;
//型注釈
const person = {
    name: "Jack",
    age: 21
};
console.log(person.name);
//Tuple型
const book = ["business", 1500, false];
const booka = ["business", 1500, false];
//Enum
var CoffeSize;
(function (CoffeSize) {
    CoffeSize["SHORT"] = "SHORT";
    CoffeSize["TALL"] = "TALL";
    CoffeSize["GRANDE"] = "GRANDE";
    CoffeSize["VENTI"] = "VENTI";
})(CoffeSize || (CoffeSize = {}));
const coffe = {
    hot: true,
    size: CoffeSize.SHORT
};
//union型、複数の型を持たせたい場合 | を用いて接続、or演算子的
let unionType = 10;
unionType = "happy";
unionType = 20;
//配列指定も可能
let unionArray = [20, "happy"];
//リテラル型　決められた型のみを使用
const banana = "banana";
const lemon = "lemon"; //決められた型（lemon）以外代入できない
/*unionとリテラルの混合、enumと似ている
enumは宣言時にデータを作成するのに対し、組み合わせでは型の指定のみ
enumはデータを作成するので厳密に扱う必要あり*/
let clothSize = "large";
const cloth = {
    color: "black",
    size: "large" //事前に指定したsizeから選択
};
//type 新しい型を宣言できる　既に設定されている型は利用できない（number）など
//関数に型をつける
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2); //関数は呼び出しを行わなければ機能しない 関数(引数)で宣言
//undefinedとnull型は、undefidedとnullしか代入できない
