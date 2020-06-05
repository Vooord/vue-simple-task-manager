import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import TodoItem from './TodoItem';

import {
    TodoItemState,
    wrapAction as wrapTodoListAction,
    NEW_TODO_ADD,
    NEW_TODO_CHANGE,
    TOGGLE_COMPLETED,
} from '@/store/todoList';

import styles from './index.css?module';


interface TodoListProps {
    todos: TodoItemState[]
}

@Component({
    components: {
        TodoItem,
    },
})
export default class TodoList extends VueComponent<TodoListProps> {
    @Prop()
    private todos!: TodoItemState[];

    get selectedDate(): number {
        return this.$store.state.calendar.selectedDate;
    }

    get newTodo(): string {
        return this.$store.state.todoList.newTodo;
    }

    toggleCompleted(todo: TodoItemState) {
        this.$store.dispatch(wrapTodoListAction(TOGGLE_COMPLETED), {
            todo,
            date: this.selectedDate,
        });
    }

    newTaskChange(e: { currentTarget: HTMLInputElement & EventTarget }) {
        this.$store.dispatch(wrapTodoListAction(NEW_TODO_CHANGE), e.currentTarget.value);
    }

    addNewTodo(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.$store.dispatch(wrapTodoListAction(NEW_TODO_ADD), {date: this.selectedDate});
        }
    }

    render() {
        return (
            <div class={styles.main}>
                <h3 class={styles.title}>События</h3>
                <div>
                    {/*{!this.todos.length && <p>В этот день пока нет событий</p>}*/}
                    <ul>
                        {this.todos.map(todo =>
                            <TodoItem
                                class={styles.todo}
                                key={todo.id}
                                todo={todo}
                                onToggleCompleted={this.toggleCompleted}
                            />)}
                    </ul>
                </div>
                <input
                    class={styles.addInput}
                    placeholder="Текст"
                    value={this.newTodo}
                    oninput={this.newTaskChange}
                    onkeyup={this.addNewTodo}
                />
            </div>
        );
    }
}
