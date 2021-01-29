import { Component, OnInit } from '@angular/core';
import { AllApiServiceService } from 'src/app/all-api-service.service';
import { Question } from 'src/app/Datamodel/Question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quetion-list',
  templateUrl: './quetion-list.component.html',
  styleUrls: ['./quetion-list.component.css']
})
export class QuetionListComponent implements OnInit {

   currentQuestion :any;

  // currentQuestion: Question = new Question('default',[]);
   constructor(private _Apiservice: AllApiServiceService , private router: Router){
     //TODO : put this in a list of question-edition-component
     //this.currentQuestion = this._Apiservice.fetchQuestions().subscribe();
     _Apiservice.fetchQuestions().subscribe(data => {
        console.log(data);
         this.currentQuestion = data;
     })
   }

  ngOnInit(): void {
  }
  sendtoupdate(data:any){
    console.log(data);
    const tData = data;

    const obj = {tData};
    
this._Apiservice.onPushTable(obj);
    console.log('heloo');
    this.router.navigate(['/AddNewQuestionComponent']);
  }

  

}
