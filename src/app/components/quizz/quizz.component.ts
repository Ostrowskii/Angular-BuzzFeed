import { Component } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  title:string = "";

    //posso criar um tipo para esse any
  questions:any;
  questionsSelected:any;

  answers:string[] = [];
  answersSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  ngOnInit():void{
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()
    // console.log(this.answers)
  }

  async nextStep(){
    this.questionIndex+=1;

    if(this.questionMaxIndex > this.questionIndex){
      this.questionsSelected = this.questions[this.questionIndex];
    }else{
      this.finished = true;
    }
  }
}
