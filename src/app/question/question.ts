import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class QuestionComponent {
  @Input() question!: {
    text: string;
    options: string[];
    correctIndex: number;
  };

  @Output() answerSelected = new EventEmitter<string>();

  selectedIndex: number | null = null;
  showCorrect = false;

  selectAnswer(index: number) {
    this.selectedIndex = index;
    this.answerSelected.emit(this.question.options[index]);
  }

  showAnswer() {
    this.showCorrect = true;
  }
}
