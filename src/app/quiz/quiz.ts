import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class QuizComponent {
  @ViewChild(QuestionComponent)
  questionComponent!: QuestionComponent;

  question = {
    text: 'Яка столиця України?',
    options: ['Львів', 'Харків', 'Київ', 'Одеса'],
    correctIndex: 2,
  };

  selectedAnswer: string | null = null;

  onAnswerSelected(answer: string) {
    this.selectedAnswer = answer;
  }

  showCorrectAnswer() {
    this.questionComponent.showAnswer();
  }
}
