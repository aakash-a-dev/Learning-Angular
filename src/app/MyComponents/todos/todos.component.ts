import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 3,
        title: "This is a title",
        desc: "Description",
        active: true
      },
         {
        sno: 4,
        title: "This is a title 2",
        desc: "Description",
        active: true
      },   {
        sno: 5,
        title: "This is a title 3",
        desc: "Description",
        active: true
      },
    ]
  }
  ngOnInit():void{}
}
