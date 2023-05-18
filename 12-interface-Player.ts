// MUST import the JavaScript File (NOT TS file)
import { IsPlayer } from '../interfaces/IsPlayer.js';

// export class Player implements "interface_name"
export class Player implements IsPlayer {
    constructor(
        // private name: string,    // can't implement any private variable
        // public name: string,
        // but jodi private implement krte chai!
        public name: string,
        private age: number,
        readonly country: string
    ) {}

    // jodi PRIVATE variable implement/ access krte chai, taile ei following function (ja ei class er mddhei ase) theke private variable ta return krbo! (joss)
    getProperty() {
        return this.age;
    }
    
    myFunc() {
        console.log(`${this.name} is ${this.age} years old & he's the only ${this.country}i cricketer to be the world best allrounder`);
    }
}