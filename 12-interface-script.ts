// ****** IMPORT JAVASCRIPT file, NOT TS file!
import { Player } from './classes/Player.js'
import { IsPlayer } from './interfaces/IsPlayer.js';

// sakib will be of "IsPlayer" type
let sakib: IsPlayer;
sakib = new Player('Sakib', 36, 'Bangladesh');


const mushi = new Player('Mushfiq', 36, 'Bangladesh');

// const players: Player[] = [];

const players: IsPlayer[] = [];

players.push(sakib, mushi);

// ******* Interface (Object)
interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

drawRectangle({
    width: 38,
    length: 48,
})


// ******* Interface (Class)