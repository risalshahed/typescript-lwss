class Player {
    // 10.1 by default, ei properties are public
    /* private name: string;
    public age: number;    // public lekha r na lekha SAME as by default public
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    } */
    
    // ************** 10.3 JODI eivabe "explicitly ALL_PROPERTIES er type" (public/ private/ readonly) declare kra thake, taile uporer 6/7 line er code aro shortcut a lekha jaay as follows **************
    constructor(
        private name: string,   // ****** eikhane ";" NAAA, COMMA ( "," ) DTE HOBE
        public age: number,    // public lekha r na lekha SAME as by default public
        readonly country: string
    ) {}
    
    myFunc() {
        console.log(`${this.name} is ${this.age} years old & he's the only ${this.country}i cricketer to be the world best allrounder`);
    }
}

const sakib = new Player('Sakib', 36, 'Bangladesh');
const mushi = new Player('Mushfiq', 36, 'Bangladesh');

// 10.2.1 public property can be altered!
sakib.age = 38;
console.log(sakib.age);

// 10.2.2 readonly property can't be altered (but can be accessed)
console.log(sakib.country);

// 10.2.3 private property can NEITHER be accessed NOR altered
// console.log(sakib.name);    // throws an error


// console.log(sakib.myFunc());

// array of strings to amra dekhesi, ekhn amra chaile ARRAY OF A SPECIFIC OBJECT TYPE dte pari!

const players: Player[] = [];

players.push(sakib, mushi);

console.log(players);