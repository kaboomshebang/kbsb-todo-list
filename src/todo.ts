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
