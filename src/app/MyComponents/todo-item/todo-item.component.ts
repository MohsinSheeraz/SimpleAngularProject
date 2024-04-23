import { Component, OnInit, Input, output, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo ;
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {
    
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick has been trigger")
  }
}
