
import { TodoListService } from './todoList.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'todo-list';

  tasks: {name: string, priority: string}[] = [];
  newTask = '';
  newpriority = '';

  comTask: {name: string, priority: string}[] = [];

  constructor(private todoListService: TodoListService){}

  ngOnInit(): void {
      this.tasks = this.todoListService.tasks;
  }

  // onAddTasks(){
  //   this.tasks.push({
  //     name: this.newTask,
  //     priority: this.newpriority
  //   });
  //   this.newTask = '';
  //   console.log(this.tasks);

  // }
  onAddTasks(){
    this.todoListService.addList(this.newTask,this.newpriority)
  }

  onComplete(index: number){
    this.comTask.push(this.tasks[index])
    this.tasks.splice(index,1);
    console.log(this.comTask);
  }

  onEdit(index: number){
    let name = this.tasks[index].name;
    let result = prompt('Edit Task', name);
    if(result !== null && result !==""){
      this.tasks[index].name = result;
    }
  }
  
  // onDelete(index: number){
  //   this.tasks.splice(index,1);
  //   console.log(this.tasks);
  // }
  onDelete(index: number){
    this.todoListService.deleteList(index);
  }


  onDeleteAll(){
    this.tasks = [];
    this.comTask = [];
  }

}