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
        return (
            <div
                class={styles.main}
                onClick={this.selectDate}
            >
                <div
                    class={styles.circle}
                    today={this.isToday}
                    selected={this.isSelected}
                />
                <div class={styles.dateWrapper}>
                    <span
                        class={styles.date}
                        filled={this.isFilled}
                        selected={this.isSelected}
                        hidden={this.date === 0}
                    >{ this.date }</span>
                </div>
            </div>
        );
    }
}
