import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import {DATE_SELECT, wrapAction as wrapCalendarAction} from '@/store/calendar';
import {TodoItemState} from '@/store/todoList';

interface Props {
    date: number,
}

@Component
export default class CalendarDate extends VueComponent<Props> {
    @Prop()
    private date!: number;

    get isToday() {
        return this.$store.state.calendar.todayDate === this.date;
    }

    get isSelected() {
        return this.$store.state.calendar.selectedDate === this.date;
    }

    get isFilled() {
        const currentTodos: TodoItemState[] = this.$store.state.todoList.todos[this.date];
        return !!(currentTodos && currentTodos.length);
    }

    selectDate() {
        this.$store.dispatch(wrapCalendarAction(DATE_SELECT), this.date);
    }

    render() {
        const dateClasses = [styles.date];
        if (this.date === 0) {
            dateClasses.push(styles.hidden);
        }

        if (this.isFilled && !this.isSelected) {
            dateClasses.push(styles.filled);
        }

        if (this.isSelected) {
            dateClasses.push(styles.selected);
        }

        if (this.isToday) {
            dateClasses.push(styles.today);
        }

        return (
            <div class={styles.dateWrapper}>
                <div
                    class={dateClasses.join(' ')}
                    onClick={this.selectDate}
                >
                    <span class={styles.title}>{ this.date }</span>
                </div>
            </div>
        );
    }
}
