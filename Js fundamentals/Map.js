// map returns a new array
// does not change the size of the array (unlike filter)
// uses values from original array when making new one.

const people = [
    { name: "bob", age: 20, position: "developer" },
    { name: "peter", age: 25, position: "designer" },
    { name: "susy", age: 30, position: "the boss" },
    { name : "john" , age: 44 , position : "intern"}
];

//Method-1
const ages = people.map((person) => {
    // parameter in map is each item in the array.
    return person.age 
});
console.log(ages);

//Method-2 
const getAges = (person) => person.age
const ages1 = people.map(getAges)

console.log(ages1);

