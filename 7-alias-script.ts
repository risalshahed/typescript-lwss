// Type Aliases
/* const userdetails = (
    id: string | number,
    user: { name: string, age: number }
) => {
    console.log(`The id of ${user.name} is ${id} & he's ${user.age}`)
}

const user2details = ( user: { name: string, age: number } ) => {
    console.log(`His name is ${user.name} & he's ${user.age}`);
} */

// well, type declaration is redundant & the code looks messy! let's clean them up with TYPE ALIASES
type stringOrNum = string | number;
type userType = { name: string, age: number };

const userdetails = (
    id: stringOrNum,
    user: userType
) => {
    console.log(`The id of ${user.name} is ${id} & he's ${user.age}`);
}

const user2details = ( user: userType ) => {
    console.log(`His name is ${user.name} & he's ${user.age}`);
}