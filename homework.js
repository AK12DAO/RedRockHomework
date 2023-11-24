/*1.使用new操作符进行创建
  2.使用对象字面量的方式创建
  3.构造函数方式创建
  4.工厂模式创建
  5.Object.create()方式创建*/

let obj1 = new Object();
let obj2 = obj1;
obj1.name = 'LOGIC';
console.log(obj2.name);//使用new操作符进行创建

let obj = new Object();
obj.name = 'sophon'
obj.age = '30';
console.log(obj);//使用对象字面量的方式创建

function Person(name, age) {
    this.name = name
    this.age = age
    this.sayname = () => {
        console.log(this.name)
    }
}
const p1 = new Person('BBH', 30)
const p2 = new Person('star', 30)//构造函数方式创建

function Person(name1, age) {
    const obj = {}
    obj.name = name1
    obj.age = age
    return obj
}

const person2 = Person('BBH', 30)
const person3 = Person('star', 19)
console.log(person instanceof Person)
console.log(person1.__proto__ == person.__proto__)//工厂模式创建