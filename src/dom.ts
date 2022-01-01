// store DOM elements
export const todoList = document.querySelector(
    '#todo-list'
) as HTMLUListElement;

export const form = document.querySelector('#form') as HTMLFormElement;
export const addBtn = document.querySelector('#add-todo') as HTMLButtonElement;

// properties of the submit todo form
export const todoDescription = document.querySelector(
    '#form-input'
) as HTMLInputElement;

export const todoPrio = document.querySelector(
    '#priority'
) as HTMLSelectElement;

export const todoProjectID = document.querySelector(
    '#todo-project-id'
) as HTMLInputElement;
