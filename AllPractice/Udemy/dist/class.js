//オブジェクトの設計図で、インスタンスと呼ぶ
class Person {
    name; //フィールド
    constructor(initName) {
        this.name = initName;
    }
}
const jack = new Person("jack"); //newでconstructorを初期化、（）内引数を渡す。
console.log(jack);
export {};
