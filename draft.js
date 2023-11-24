function foo() {
    var age;
    console.log(age);
    age = 20;
}
foo();

function foo() {
    if (true) {
        var name = 'BBH';
        console.log(name);
    }
    console.log(name);
    if (true) {
        let age = 30;
        console.log(age);
    }
    console.log(age);
}
foo();

let name = null;
console.log(typeof name);

let num1 = 1;
let num2 = 2.2;

console.log('string text line 1\n' + 'sting text line 2');

let a = 1;
let b = 2;
console.log("a+b=" + (a + b));
console.log('a+b=${a+b}');

let obj1 = new Object();
let obj2 = obj1;
obj1.name = 'BBH';
console.log(obj2.name);

function foo(num) {
    num = 10;
    console.log(num);
}
let num = 0;
console.log(num);
foo(num);
console.log(num);

function test() {
    const a = 'inner';
}
console.log(a);

const global = "I am in the global scope";

function foo() {
    console.log(globalVar);
}

foo();//全局作用域

function foo() {
    let _fooValue = "I am in the outer Function scope"

    console.log(_fooVlue);
}

foo();//函数作用域

function foo() {
    if (true) {
        let blockVar = "I am in the block scope";
        console.log(blockVar);
    }

    console.log(blockVar);
}

foo();//块级作用域

let obj = new Objectr();
obj.name = 'BBH';
obj.age = '30';
console.log(obj);//使用Object()构造函数

let obj = {
    name: 'BBH',
    age: '30'
}
console.log(obj);//使用对象字变量

function Person(name, age) {
    this.name = name
    this.age = age
    this.sayname = () => {
        console.log(this.name)
    }
}
const p1 = new Person('BBH', 30)
const p2 = new Person('star', 19)//使用构造函数创建一个对象

function Person(name, age) {
    const obj = {}
    obj.name = name
    obj.name = age
    return obj
}

const person = Person('BBH', 30)
const person1 = person('star', 19)
console.log(person instanceof Person)// ->false
console.log(person1.__proto__ == person.__proto_)// ->false(工厂模式)

// function Person() {
//     Person.prototype.name = "BBH";
//     Person.prototype.age = 30;
//     Person.prototype.sayName = function(){
//         console.log(this.name);
//     }
// }

// let person = new Person();
// person.sayName();//BBH
// console.log(person.name)//BBH(原型模式)

let obj = {
    name: 'BBH',
    age: 30
}
obj.gender = 'male';
console.log(obj); //{name:'BBH', age: 30,gender:'male'}

let obj = new Object();
obj['name'] = 'BBH';
console.log(obj); //{name: 'BBH'}

// let a = 'name'
// let b = 1;
// let c = {
//     name:"test"
// }
// let obj = new Object();
// obj[a] = 'Billy';
// obj[b] = 'test1';
// obj[c] = 'test2';
// console.log (obj);

