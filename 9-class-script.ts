class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    myFunc() {
        console.log(`${this.name} is ${this.age} years old & he's the only ${this.country}i cricketer to be the world best allrounder`);
    }
}

const sakib = new Player('Sakib', 36, 'Bangladesh');
const mushi = new Player('Mushfiq', 36, 'Bangladesh');

console.log(sakib.myFunc());

// array of strings to amra dekhesi, ekhn amra chaile ARRAY OF A SPECIFICI OBJECT TYPE dte pari!

const players: Player[] = [];

players.push(sakib, mushi);

console.log(players);