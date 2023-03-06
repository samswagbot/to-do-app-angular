import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputToDo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }
  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    });
  }

  deleteToDo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputToDo,
      completed: false
    })

    this.inputToDo = ''
  }
  
}
