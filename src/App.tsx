import {Component, Vue} from 'vue-property-decorator';

import TodoList from '@/containers/TodoList';
import Calendar from '@/containers/Calendar';

import {RootModule} from '@/store/root';
import {useStore} from 'vuex-simple';

import styles from './App.css?module';

@Component
export default class App extends Vue {
    public store: RootModule = useStore(this.$store);

    get selectedDate() {
        return this.store.calendar.selectedDate;
    }

    get todos() {
        return this.store.todoList.todos;
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
                                    todos={this.todos[this.selectedDate] || []}
                                    selectedDate={this.selectedDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
