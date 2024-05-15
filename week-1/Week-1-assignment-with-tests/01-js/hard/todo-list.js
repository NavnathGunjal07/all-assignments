/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    this.todos = this.todos.filter((item, id, arr) => id !== index);
  }
  update(index, updatedTodo) {
    this.todos = this.todos.map((item, id) => {
      if (id === index) {
        item = updatedTodo;
      }
      return item;
    });
  }
  getAll() {
    return this.todos;
  }
  get(index) {
    if (index >= 0 && index < this.todos.length) return this.todos[index];
    else return null;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
