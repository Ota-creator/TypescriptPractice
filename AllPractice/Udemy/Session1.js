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
