import PromptSync from "prompt-sync";
import Player from '../classes/player.js';
import {riddles} from '../riddles/module.js';
import Riddle from "../classes/riddle.js";

let player;
let turn = 0;
export function gameProcess(){
//Save the name of player
const prompt = PromptSync();
const name = prompt(console.log("Hello what is your name? "));

//initial game
player = new Player(name);

//Game loop
while (turn < riddles.length){
    const {id, name, description, correctAnswer} = riddles[turn];
    let riddle = new Riddle(id, name, description, correctAnswer);
    const finish =  riddle.playRiddle();
    player.time += finish.time;
    player.time = +(player.time.toFixed(2))
    player.addToSolved(riddle.id);
    player.updateAvg();
    turn++;
}

console.log("Congratulation!")
console.log(`Time of game - ${player.time} second`);
console.log(`Time per riddle (avg) - ${player.avgTime} second`);
console.log(`${player.name} solved ${player.solvedProblem.length} riddles`);

}