// type inference(Implicit)
const ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';

let a;

let b: boolean;
b = true;

let c: number;
c = 1;

let d: string;
d = "hello";

let e: bigint;
e = 100n;

let f: symbol;
f = Symbol("Sym")

let g: () => void;
g = function () {
    return null;
};

let h: null;
h = null;

let i: {};
i = {};

let j: [];
j = [];

class Product {
    // class
    //...
}

let k = new Product();

function sum(a: number, b: number): number {
    return a + b;
    // return 12;
}
let arg1 = 1;
let arg2 = 6;
let result = sum(arg1, arg2);
console.log(result)

//union
let multi: string | number | boolean; //bisa menerima string / number
multi = "Ini String"
multi = 123
multi = true

//Type Aliases
type CustomType = string | number;
let myType: CustomType;
myType = "Hello"
myType = 123

