import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  existingString:string='Welcome to logic'
  getString!:string;
  
  ngOnInit(){
    
  }
  concatString(){
    let result=this.existingString  + " "+  this.getString;
    console.log(result);

  }
}
