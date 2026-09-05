//Tuple型
const book = ["business",1500,false];
const booka: [string,number,boolean] = ["business",1500,false];

//Enum
enum CoffeSize {
    SHORT = "SHORT",
    TALL = "TALL",
    GRANDE = "GRANDE",
    VENTI = "VENTI"
}

const coffe = {
    hot: true,
    size: CoffeSize.SHORT
}