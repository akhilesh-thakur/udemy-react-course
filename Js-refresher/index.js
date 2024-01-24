const employee = {
    "name":"kumar",
    "age":20,
    "role":"software engineer",
}

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);


// practicing class in js
class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const User1 = new User("Akhilesh","20");
console.log(User1);

const User2 = new User("Aniket","22");
console.log(User2);

const User3 = new User("Prashant","25");
console.log(User3);