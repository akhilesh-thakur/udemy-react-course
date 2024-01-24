const students = ["ramu","rahul","nandni","pratiksha"];

// display the values
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

students[2] = "Thakur"; // thakur is now appended at the index 2
console.log(students);

const fIndex = students.findIndex((item) => {
    return item === "Thakur";
})
console.log(fIndex);

// map methods

const display = students.map((item) => {
    // console.log(item);
    return item;
});
console.log(display);


// distructuring

const arr = ["akhilesh","thakur","mumbai"];

const [firstName, lastName, location] = ["akhilesh","thakur","mumbai"];

console.log(firstName);
console.log(lastName);
console.log(location);