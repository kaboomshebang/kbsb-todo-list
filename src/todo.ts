// class todo
export enum Priority {
	NORMAL = 'Normal priority',
	HIGH = 'High priority',
	LOW = 'Low priority',
}

export class Todo {
	readonly _todoId: number = Date.now();

	// shortform property constructor syntax
	constructor(
		private _projectId: number,
		public description: string,
		public priority: Priority,
		public completed: boolean
	) {}

	public get projectId() {
		return this._projectId;
	}
}

// render the todo list
export class TodoList {
	// list the todos inside a ul element
	constructor(private todoContainer: HTMLUListElement) {}

	// add a new todo object to the ul list
	addTodo(t: Todo) {
		const li = document.createElement('li');
		li.className = 'todo-item';

		// the header of the todo item
		const divProps = document.createElement('div');
		divProps.className = 'todo-item-props';
		// header projectId
		const divPropsProject = document.createElement('span');
		divPropsProject.innerText = t.projectId.toString();
		divProps.appendChild(divPropsProject);
		// header buttons
		const divPropsButtons = document.createElement('span');
		const btnDone = document.createElement('button');
		btnDone.innerText = 'Done';
		const btnRemove = document.createElement('button');
		btnRemove.innerText = 'Remove';
		divPropsButtons.appendChild(btnDone);
		divPropsButtons.appendChild(btnRemove);
		divProps.appendChild(divPropsButtons);

		// add the content of the todo
		const divContent = document.createElement('div');
		divContent.className = 'todo-item-content';
		divContent.innerText = t.description;

		li.appendChild(divProps);
		li.appendChild(divContent);

		this.todoContainer.append(li);
	}

	// remove a todo
	removeTodo() {}
}
