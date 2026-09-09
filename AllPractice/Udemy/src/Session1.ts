let hasValue: boolean = true;

let count: number = 10;
let float: number = 3.14;
let negative:number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

//型推論
let one = 1;


//型注釈
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


//union型、複数の型を持たせたい場合 | を用いて接続、or演算子的
let unionType : number | string = 10;
unionType = "happy";
unionType = 20;

//配列指定も可能
let unionArray: (number | string)[] = [20,"happy"]


//リテラル型　決められた型のみを使用
const banana:"banana" ="banana"
const lemon:"lemon" ="lemon" //決められた型（lemon）以外代入できない

/*unionとリテラルの混合、enumと似ている
enumは宣言時にデータを作成するのに対し、組み合わせでは型の指定のみ
enumはデータを作成するので厳密に扱う必要あり*/
let clothSize: "small" | "medium" | "large" = "large";
const cloth:{
    color: string;
    size: "small" | "medium" | "large" //混合
} = {
    color: "black",
    size: "large" //事前に指定したsizeから選択
}


//type 新しい型を宣言できる　既に設定されている型は利用できない（number）など


//関数に型をつける
function add (num1:/*ここでパラメータに対して型指定*/　number, num2:number) 
    :/*ここで戻り値に対して型指定*/ number {
        return num1 + num2
}
add(3,2); //関数は呼び出しを行わなければ機能しない 関数(引数)で宣言


//undefinedとnull型は、undefidedとnullしか代入できない