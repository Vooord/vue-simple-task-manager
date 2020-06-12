import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import TodoListContainer from '@/containers/TodoList';
import {TodoItemState} from '@/store/modules/todoList';

import styles from './index.css?module';


interface Props {
    todo: TodoItemState,
    onToggleCompleted: TodoListContainer['toggleCompleted']
}

@Component
export default class TodoItem extends VueComponent<Props> {
    @Prop()
    private todo!: Props['todo'];

    @Prop()
    private onToggleCompleted!: Props['onToggleCompleted'];

    render() {
        const id = +new Date();
        return (
            <div
                completed={this.todo.completed}
                class={styles.main}
            >
                <input
                    type='checkbox'
                    checked={this.todo.completed}
                    onchange={() => this.$emit('toggleCompleted', this.todo)}
                    id={id}
                    class={styles.completedButton}
                />
                <label
                    for={id}
                    class={styles.todoText}
                >{this.todo.title}</label>
            </div>
        );
    }
}
