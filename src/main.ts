// imports https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { Priority, Todo, TodoList } from './todo.js';
import { Project } from './project.js';
import * as dom from './dom.js';

// store all todos
// const todos: Todo[] = [];
const todoList = new TodoList(dom.todoList);

// handle the form submit
dom.form.addEventListener('submit', (e: Event) => {
	// prevent the page from reloading
	e.preventDefault();

	let prio: Priority;
	switch (dom.todoPrio.value) {
		case 'high':
			prio = Priority.HIGH;
		case 'low':
			prio = Priority.LOW;
		default:
			prio = Priority.NORMAL;
	}

	// todos.push(new Todo(dom.todoProjectID.valueAsNumber, dom.todoDescription.value, prio, false));
	// console.log(todos);

	todoList.addTodo(new Todo(dom.todoProjectID.valueAsNumber, dom.todoDescription.value, prio, false));
});
