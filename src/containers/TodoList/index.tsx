import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import TodoListComponent from '@/components/TodoList';

import {RootModule} from '@/store/root';
import {useStore} from 'vuex-simple';
import {
    NEW_TODO_ADD,
    NEW_TODO_CHANGE,
    TodoItemState,
    TOGGLE_COMPLETED,
} from '@/store/modules/todoList';

import App from '@/App';


interface Props {
    todos: TodoItemState[],
    selectedDate: App['selectedDate']
}

@Component
export default class TodoList extends VueComponent<Props> {
    @Prop()
    private todos!: Props['todos'];

    @Prop()
    private selectedDate!: Props['selectedDate']

    public store: RootModule = useStore(this.$store);

    get newTodo() {
        return this.store.todoList.newTodo;
    }

    toggleCompleted(todo: TodoItemState): void {
        this.store.todoList[TOGGLE_COMPLETED]({
            todo,
            date: this.selectedDate,
        });
    }

    newTaskChange(e: { currentTarget: HTMLInputElement & EventTarget }): void {
        this.store.todoList[NEW_TODO_CHANGE](e.currentTarget.value);
    }

    addNewTodo(e: KeyboardEvent): void {
        if (e.key === 'Enter') {
            this.store.todoList[NEW_TODO_ADD]( {date: this.selectedDate});
        }
    }

    render() {
        return (
            <TodoListComponent
                todos={this.todos}
                newTodo={this.newTodo}
                toggleCompleted={this.toggleCompleted}
                newTaskChange={this.newTaskChange}
                addNewTodo={this.addNewTodo}
            />
        );
    }
}
