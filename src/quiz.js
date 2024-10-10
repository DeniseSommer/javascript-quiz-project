class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
  }

  correctAnswers = 0;
  currentQuestionIndex = 0;

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      // Loop va para atrás
      const randomIndex = Math.floor(Math.random() * (i + 1)); // Se genera un index random
      [this.questions[i], this.questions[randomIndex]] = [
        // Invierte el orden de los elementos del array
        this.questions[randomIndex],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers += 1;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    }

    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }
}
