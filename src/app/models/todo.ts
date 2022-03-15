import { TodoDifficulty } from './todo-difficulty';
import { TodoStatus } from './todo-status';

export class Todo {
  content: string;
  status: TodoStatus;
  difficulty: TodoDifficulty;
}
