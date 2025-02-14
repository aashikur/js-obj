// different ways of declare object in javascript

// Using object literal
const obj1 = {
    name: "John",
    age: 30
};

// Using the Object constructor
const obj2 = new Object();
obj2.name = "Jane";
obj2.age = 25;

// Using a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const obj3 = new Person("Alice", 28);

// Using Object.create()
const proto = {
    greet() {
        console.log("Hello!");
    }
};
const obj4 = Object.create(proto);
obj4.name = "Bob";
obj4.age = 35;