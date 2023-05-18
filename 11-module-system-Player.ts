export class Player {
    constructor(
        private name: string,
        public age: number,
        readonly country: string
    ) {}
    
    myFunc() {
        console.log(`${this.name} is ${this.age} years old & he's the only ${this.country}i cricketer to be the world best allrounder`);
    }
}