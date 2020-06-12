import {Module} from 'vuex';
import {Action, Mutation, State} from 'vuex-simple';


const DEFAULT_TODOS = {
    [new Date().getDate() === 1 ? '2' : '1']: [
        {'id':1591282247436,'title':'Сесть на диету','completed':false},
    ],
    [new Date().getDate() === 15 ? '16' : '15']: [
        {'id':1591282247748,'title':'Ну все, вот теперь прям точно сесть на диету','completed':false},
    ],

    [new Date().getDate()]: [
        {'id':1591282246341,'title':'Уволиться из Яндекса','completed':true},
        {'id':1591282243001,'title':'Сделать тестовое в Озон','completed':false},
        {'id':1591282246749,'title':'...','completed':false},
        {'id':1591282247092,'title':'Profit','completed':false},
    ],
};


export const wrapAction = (action: string) => `todoList/${action}`;

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const NEW_TODO_CHANGE = 'NEW_TASK_CHANGE';
export const NEW_TODO_ADD = 'NEW_TASK_ADD';


export interface TodoItemState {
    title: string,
    id: number,
    completed: boolean,
}

export interface Todos {
    [date: string]: TodoItemState[]
}


export class TodoListModule {
    @State()
    public todos: Todos = DEFAULT_TODOS;

    @State()
    public newTodo = '';


    @Mutation()
    toggleCompleted(payload: {todo: TodoItemState, date: number}) {
        const {date, todo} = payload;
        this.todos[date] = this.todos[date].map(t => (t.id === todo.id ? {...t, completed: !t.completed} : t));
    }

    @Mutation()
    changeNewTodo(payload: string) {
        this.newTodo = payload;
    }

    @Mutation()
    addNewTodo(payload: {date: number}) {
        const {date} = payload;

        const newTodo = {
            id: +new Date(),
            title: this.newTodo,
            completed: false,
        };

        if (!this.todos[date]) {
            /*
            Очевидный вариант с...
            this.todos[date] = [newTodo];
            ...не работает, из-за особенностей реактивности Vue
             */
            this.todos = {
                ...this.todos,
                [date]: [newTodo],
            };
        } else {
            this.todos[date].push(newTodo);
        }

        this.newTodo = '';
    }


    @Action()
    [TOGGLE_COMPLETED](payload: {todo: TodoItemState, date: number}) {
        this.toggleCompleted(payload)
    }

    @Action()
    [NEW_TODO_CHANGE](payload: string) {
        this.changeNewTodo(payload)
    }

    @Action()
    [NEW_TODO_ADD](payload: {date: number}) {
        if (this.newTodo) {
            this.addNewTodo(payload)
        }
    }
}
