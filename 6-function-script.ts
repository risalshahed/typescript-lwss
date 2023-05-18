// ***** "Function" type starts with capital letter (karon, "function" actually JS er 1ta keyword)
/* let myFunc: Function = () => {
    console.log('Hello');
} */

// myFunc = [1,2,3];   // gives error, hover over the variable

// with parameter

const myFunc = (a: string, b:string) => {
    console.log(`Hello ${a} ${b}`);
}

myFunc('1', 'a');

// OPTIONAL parameter
const myFunc2 = (a: string, b:string, c?:string) => {   // c is optional
    console.log(`Hello ${a} ${b}`);
}

myFunc2('1', 'a');