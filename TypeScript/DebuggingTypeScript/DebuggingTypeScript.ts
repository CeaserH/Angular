// 1. Setting types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "nine";
// it is expecting a string in return and was originally a number. change the '9' to a string of 'nine'. or place the 9 inside of quotes.


// 2. Setting the types for function parameters

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
 // Need to turn the 9 into a string by putting it between quotes.

// 3. Option parameters

function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "", "Jones"));
 // function is expecting 3 names, first, middle, and last, second console.log has no middle name and throws an error, fix it by adding empty quotes for middle name.

//  4. Interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 // belt was typo'd, it interface requires belt(s) as in plear and not singular and didn't recognize the student.

// 5. Classes and function parameters

class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("shane", "doe");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
     lastName: "Turing",
    debug(){
     console.log("hello")
 }
 }
 
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));
 // shane was not creating a new ninja, needed to add new to create and new instance and also provide both necessary arguments(firstname and lastname).
 // turing requires 'debug' as implemented in the class for it to function properly.

//  6. Arrow functions

var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x: number, y: number) => x * y;
console.log(multiply(2, 4));
// Nor is this working:
var maths = (x: number, y: number)=>{
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
maths(4, 2);
// increment was fine just added a number designator to x
// square needed x to be designated as a number
// multiple needed x and y to be designated as a number
// math needed to be created into a function, allowing sum, product and difference to be ran on math invoke while returning all three.

// 7. Arrow functions and 'this'

class Elephant {
    constructor(public age: number) { 
        this.age = age;
    }
        birthday = function (age: number) {
            age++;
        }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
// constructor was empty and needed to designate age, afterwards was able to create the birthday function that make the age++.