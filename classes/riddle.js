import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default class Riddle {
  constructor(id, name, description, correctAnswer) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.correctAnswer = correctAnswer;
  }

  checkAnswer(answer) {
    return answer === this.correctAnswer;
  }
  playRiddle() {
    const start = Date.now();
    let answer = prompt(this.description);
    while (!this.checkAnswer(answer)) {
      console.log("Wrong answer, try again!");
      answer = prompt(this.description);
    }
    return {
      id: this.id,
      time: +((Date.now() - start) / 1000).toFixed(2),
    };
  }
}
