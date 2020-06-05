import {Module} from 'vuex';


const DEFAULT_TODOS = {
    [new Date().getDate()]: [
        {'id':1591282246341,'title':'Уволиться из Яндекса','completed':true},
        {'id':1591282243001,'title':'Сделать тестовое в Озон','completed':false},
        {'id':1591282246749,'title':'...','completed':false},
        {'id':1591282247092,'title':'Profit','completed':false},
    ],

    '1': [
        {'id':1591282247436,'title':'Сесть на диету','completed':false},
    ],
    '15': [
        {'id':1591282247748,'title':'Ну все, вот теперь прям точно сесть на диету','completed':false},
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

export interface TodoListState {
    todos: Todos,
    newTodo: string,
}

export const todoList: Module<TodoListState, {}> = {
    namespaced: true,

    state: {
        todos: DEFAULT_TODOS,
        newTodo: '',
    },

    mutations: {
        [TOGGLE_COMPLETED](state, payload: {todo: TodoItemState, date: number}) {
            const {date, todo} = payload;
            state.todos[date] = state.todos[date].map(t => (t.id === todo.id ? {...t, completed: !t.completed} : t));
        },

        [NEW_TODO_CHANGE](state, payload: string) {
            state.newTodo = payload;
        },

        [NEW_TODO_ADD](state, payload: {date: number}) {
            const {date} = payload;

            const newTodo = {
                id: +new Date(),
                title: state.newTodo,
                completed: false,
            };

            if (!state.todos[date]) {
                /*
                Очевидный вариант с...
                state.todos[date] = [newTodo];
                ...не работает, из-за особенностей реактивности Vue
                 */
                state.todos = {
                    ...state.todos,
                    [date]: [newTodo],
                };
            } else {
                state.todos[date].push(newTodo);
            }

            state.newTodo = '';
        },
    },

    actions: {
        [TOGGLE_COMPLETED](context, payload) {
            context.commit(TOGGLE_COMPLETED, payload);
        },

        [NEW_TODO_CHANGE](context, payload) {
            context.commit(NEW_TODO_CHANGE, payload);
        },

        [NEW_TODO_ADD](context, payload) {
            context.commit(NEW_TODO_ADD, payload);
        },
    },
};
