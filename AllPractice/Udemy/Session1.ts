let hasValue: boolean = true;

let count: number = 10;
let float: number = 3.14;
let negative:number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

//型推論
let one = 1;


const person: {
    name: string;
    age: number;
}={
    name: "Jack",
    age: 21
}
console.log(person.name);

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

