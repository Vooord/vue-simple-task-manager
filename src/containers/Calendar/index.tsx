import {Component, Vue} from 'vue-property-decorator';

import CalendarComponent from '@/components/Calendar';

import {useStore} from 'vuex-simple';
import {RootModule} from '@/store/root';
import {DATE_SELECT, wrapAction as wrapCalendarAction} from '@/store/modules/calendar';

@Component
export default class Calendar extends Vue {
    public store: RootModule = useStore(this.$store);

    get month() {
        return this.store.calendar.month;
    }

    get year() {
        return this.store.calendar.year;
    }

    get today() {
        return this.store.calendar.todayDate;
    }

    get selectedDate() {
        return this.store.calendar.selectedDate;
    }

    get todos() {
        return this.store.todoList.todos;
    }

    selectDate(date: number) {
        this.$store.dispatch(wrapCalendarAction(DATE_SELECT), date);
    }

    render() {
        return (
            <CalendarComponent
                year={this.year}
                month={this.month}
                today={this.today}
                selectedDate={this.selectedDate}
                todos={this.todos}
                selectDate={this.selectDate}
            />
        );
    }
}
