//オブジェクトの設計図で、インスタンスと呼ぶ

import { isEntityName } from "typescript/unstable/ast";

class Person {
    name: string; //フィールド
　　constructor(initName:string){ //初期化用関数
    this.name = initName;
}
}

const jack = new Person("jack");//newでconstructorを初期化、（）内引数を渡す。
console.log(jack);