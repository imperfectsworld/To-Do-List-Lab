import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';

  todo: ToDo [] = [ 
    {task: "Fold Clothes", completed: false , duration: 0.5, priority: "High Priority"},
    {task: "Clean Bathroom", completed: true , duration: 1, priority: "Low Priority" },
    {task: "Wash Dishes", completed: false , duration: 1, priority: "Normal Priority"} ,
    {task: "Play Video Games", completed: true , duration: 3, priority: "Normal Priority" },
    {task: "Practice Coding", completed: true , duration: 3, priority: "High Priority"}
  ];
  formToDo: ToDo = {} as ToDo;




//methods
addTask():void{
  let result: ToDo = {...this.formToDo};
  result.completed = false;
  this.todo.push(result);
  this.formToDo = {} as ToDo;
}




completeTask(p: ToDo):void{
  p.completed = true;
}

removetask(p: ToDo):void{
  let index: number = this.todo.findIndex(x => x === p);
  this.todo.splice(index,1);
}


}
