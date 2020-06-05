import {Component, Vue} from 'vue-property-decorator';

import TodoList from '@/components/TodoList';
import Calendar from '@/components/Calendar';

import {TodoItemState} from '@/store/todoList';

import styles from './App.css?module';

@Component({
    components: {
        Calendar,
        TodoList,
    },
})
export default class App extends Vue {
    get todos(): TodoItemState[] {
        return this.$store.state.todoList.todos[this.$store.state.calendar.selectedDate] || [];
    }

    render() {
        return (
            <div id="app" class={styles.app}>
                <div class={styles.centerWrapper}>
                    <div class={styles.heightWrapper}>
                        <div class={styles.main}>
                            <div class={styles.calendar}>
                                <Calendar/>
                            </div>
                            <div class={styles.todoList}>
                                <TodoList
                                    todos={this.todos}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
