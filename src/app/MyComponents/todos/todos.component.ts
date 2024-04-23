import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  localStorage : any
  todos: Todo[] | any
  constructor() {
  if (typeof localStorage !== 'undefined') {
  this.localStorage = localStorage.getItem("todos");
    if(this.localStorage == null){
    
      this.todos = [];
    return
    }
      this.todos = JSON.parse(this.localStorage); 
  }

  }

  ngOnInit(): void {}

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
