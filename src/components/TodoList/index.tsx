import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import TodoListContainer from '@/containers/TodoList';

import TodoItem from './TodoItem';

import styles from './index.css?module';


interface Props {
    todos: TodoListContainer['todos'],
    newTodo: TodoListContainer['newTodo'],
    toggleCompleted: TodoListContainer['toggleCompleted'],
    newTaskChange: TodoListContainer['newTaskChange'],
    addNewTodo: TodoListContainer['addNewTodo'],
}

@Component
export default class TodoList extends VueComponent<Props> {
    @Prop()
    private todos!: Props['todos'];

    @Prop()
    private newTodo!: Props['newTodo']

    @Prop()
    private toggleCompleted!: Props['toggleCompleted']

    @Prop()
    private newTaskChange!: Props['newTaskChange']

    @Prop()
    private addNewTodo!: Props['addNewTodo']

    render() {
        return (
            <div class={styles.main}>
                <h3 class={styles.title}>События</h3>
                <div>
                    {this.todos.map(todo =>
                        <TodoItem
                            class={styles.todo}
                            key={todo.id}
                            todo={todo}
                            onToggleCompleted={this.toggleCompleted}
                        />)}
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
