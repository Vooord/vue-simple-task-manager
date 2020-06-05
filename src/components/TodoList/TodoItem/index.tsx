import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import {TodoItemState} from '@/store/todoList';

import styles from './index.css?module';


interface Props {
    todo: TodoItemState,
    onToggleCompleted: (todo: TodoItemState) => void
}

@Component
export default class TodoItem extends VueComponent<Props> {
    @Prop()
    private todo!: TodoItemState;

    @Prop()
    private onToggleCompleted!: (todo: TodoItemState) => void;

    render() {
        const todoClasses = [styles.todoText];
        if (this.todo.completed) {
            todoClasses.push(styles.todoTextCompleted);
        }

        return (
            <div class={styles.main}>
                <button
                    class={styles.checkedButton}
                    onclick={() => this.$emit('toggleCompleted', this.todo)}
                />
                <li class={todoClasses.join(' ')}>{this.todo.title}</li>
            </div>
        );
    }
}
