"use strict";
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
