import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoStatus } from 'src/app/models/todo-status';
import { TodoDifficulty } from 'src/app/models/todo-difficulty';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  dificultyLevels = TodoDifficulty;
  todoStatus = TodoStatus;
  enumKeys = [];

  inputTodo: string = '';
  level: TodoDifficulty;

  constructor() {
    this.enumKeys = Object.keys(this.dificultyLevels);
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First',
        status: TodoStatus.Active,
        difficulty: TodoDifficulty.Hard,
      },
      {
        content: 'Second',
        status: TodoStatus.InProgress,
        difficulty: TodoDifficulty.Easy,
      },
      {
        content: 'Third',
        status: TodoStatus.Done,
        difficulty: TodoDifficulty.Medium,
      },
      {
        content: 'Forth',
        status: TodoStatus.Active,
        difficulty: TodoDifficulty.Easy,
      },
    ];
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      status: TodoStatus.Active,
      difficulty: this.level,
    });

    console.log('fucked');
  }

  deleteToDo(id: number): void {}

  changeStatus(id: number, status: TodoStatus) {
    this.todos[id].status = status;
  }
}
