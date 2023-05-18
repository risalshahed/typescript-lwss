// ****** IMPORT JAVASCRIPT file, NOT TS file!
import { Player } from './classes/Player.js'

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