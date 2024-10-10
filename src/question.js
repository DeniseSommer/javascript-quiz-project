class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      // Loop va para atrás
      const randomIndex = Math.floor(Math.random() * (i + 1)); // Se genera un index random
      [this.choices[i], this.choices[randomIndex]] = [
        // Invierte el orden de los elementos del array
        this.choices[randomIndex],
        this.choices[i],
      ];
    }
  }
}
