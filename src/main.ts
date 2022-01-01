// imports https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { Priority, Todo } from './todo';
import { Project } from './project';
import * as dom from './dom';

// store all todos
let todos: Todo[] = [];

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

    todos.push(
        new Todo(
            dom.todoProjectID.valueAsNumber,
            dom.todoDescription.value,
            prio,
            false
        )
    );

    console.log(todos);
});
