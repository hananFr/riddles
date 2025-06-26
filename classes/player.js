export default class Player{
    constructor(name){
        this.name = name;
        this.solvedProblem = [];
        this.time = 0;
        this.avgTime = 0;
    }  
    addToSolved(riddleId){
        this.solvedProblem.push(riddleId);
    }
    
    updateAvg(){
        this.avgTime = (this.time / this.solvedProblem.length).toFixed(2);
    }
}