import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [
    {id: 1, title: 'create new angular apps', complete: false},
    {id: 2, title: 'write new angular tutorials', complete: false},
    {id: 3, title: 'contribute in angular repositories', complete: false},
    {id: 4, title: 'destroy windows && azure', complete: false}
  ];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
      if (!todo.id) {
        todo.id = ++this.lastId;
      }
      this.todos.push(todo);
      return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id)
    .pop();
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
