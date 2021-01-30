import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './Datamodel/Question';

@Injectable({
  providedIn: 'root'
})
export class AllApiServiceService {

  private yourData:any;
  apiurl!: String;
  private _QuestionsUrl = "http://localhost:8080/quiz-rest/rest/quizzes/0/questions";
  private _DeleteQuestionsUrl = "http://localhost:8080/quiz-rest/rest/quizzes";
  private _QuizUrl = "http://localhost:8080/quiz-rest/rest/quizzes/0/quiz";
  private _StudentUrl = "http://localhost:8080/quiz-rest/rest/students/0/student";
  private _SaveAnswers = "http://localhost:8080/quiz-rest/rest/studentExam/0/answers";
  private _getQuestionByQuizId = "http://localhost:8080/quiz-rest/rest/quizzes/AllQuestionsByQuizId"
  constructor(private httpclient: HttpClient) { }
  
  
  CreateQuestions(data:any): Observable<any>{
    const url = `${this._QuestionsUrl}`;
    console.log(url); 
    return this.httpclient.post(url , data); 
}

UpdateQuestions(data:any): Observable<any>{
  const url = `${this._QuestionsUrl}`;
  console.log(url); 
  return this.httpclient.put(url , data); 
}

DeleteQuestions(Id:any): Observable<any>{
  const url = `${this._DeleteQuestionsUrl}/${Id}`;
  console.log(url); 
  return this.httpclient.delete(url); 
}

AddQuizName(data:any): Observable<any>{
  //this.apiurl  = 'https://localhost:44370/api/contact';
  const url = `${this._QuizUrl}`;
  console.log(url); 
  return this.httpclient.post(url , data); 
}
AddStudentName(data:any): Observable<any>{
  //this.apiurl  = 'https://localhost:44370/api/contact';
  const url = `${this._StudentUrl}`;
  console.log(url); 
  return this.httpclient.post(url , data); 
}
fetchQuestions():Observable<Question>{
  // var defaultChoices = [
  //   new Choice("this is a valid choice", true),
  //   new Choice("this is an invalid choice", false)
  // ];
 // var currentQuestion = new Question("Default question title", defaultChoices);
   return this.httpclient.get<Question>("http://localhost:8080/quiz-rest/rest/quizzes/questions");

}
fetchQuestionsByQuizId(id:any):Observable<Question>{
  // var defaultChoices = [
  //   new Choice("this is a valid choice", true),
  //   new Choice("this is an invalid choice", false)
  // ];
 // var currentQuestion = new Question("Default question title", defaultChoices);
 const url = `${this._getQuestionByQuizId}/${id}`;
 console.log(url); 
 return this.httpclient.get<Question>(url);

}

getQuizName(): Observable <any> {  
  return this.httpclient.get("http://localhost:8080/quiz-rest/rest/quizzes/quizAll");
}
SaveAnswers(data:any): Observable <any> {  
  const url = `${this._SaveAnswers}`;
  console.log(url); 
  return this.httpclient.post(url , data); 
}


onPushTable(obj:any) {
  console.log('i m in onPushTable');
  this.yourData = obj;
}

getYourData() {
  console.log('i m in getYourData');
  return this.yourData;
}
}
