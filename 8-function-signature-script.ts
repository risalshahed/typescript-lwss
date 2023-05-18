// Function Signature
// let x: (a: string) => void;     // ****** means this function will return "nothing"

let add: (x: number, y: number) => number; // means this function will return "number"

add = (a: number, b:number) => {
    // console.log(a + b);     // error as still returns nothing
    return a + b;
}

let calc: (x: number, y: number, z: string) => number;

calc = (a: number, b: number, c: string) => {
    if('add' === c) {
        return a + b;
    } else {
        // ****** ei "else" ba jpto block ase tar j kono 1ta block theke jodi kisu return kra na hy, taholei error dbe TypeScript!
        return a - b;
    }
}

// **** Object name can be changed but its properties can't be! Let's give an example
let userDetails: (id: number | string, userInfo: {
    name: string,
    age: number
}) => void;

// "id" er jaygay "index", "userInfo" er jaygay "userBio" dte pari, BUT "userInfo" object er jei propertu, egular NAME CHANGE kora jabe NAAAA
userDetails = (index: number | string, userBio: {
    name: string,
    age: number
}) => {

}
