import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import CalendarContainer from '@/containers/Calendar';

import CalendarMonthHeader from './CalendarMonthHeader';
import CalendarMonth from './CalendarMonth';

interface Props {
    year: CalendarContainer['year'],
    month: CalendarContainer['month'],
    todos: CalendarContainer['todos'],
    today: CalendarContainer['today'],
    selectedDate: CalendarContainer['selectedDate'],
    selectDate: CalendarContainer['selectDate'],
}

@Component
export default class Calendar extends VueComponent<Props> {
    @Prop()
    private year!: Props['year']

    @Prop()
    private month!: Props['month']

    @Prop()
    private todos!: Props['todos']

    @Prop()
    private today!: Props['today']

    @Prop()
    private selectedDate!: Props['selectedDate']

    @Prop()
    private selectDate!: Props['selectDate']

    // день недели первого дня месяца (0 - пн, 6 - вск)
    get firstDay() {
        const firstDay = new Date(this.year, this.month, 1).getDay();
        return (firstDay > 0) ? firstDay - 1 : 6;
    }

    // кол-во дней в месяце (дата последнего дня)
    get numDays() {
        return new Date(this.year, this.month + 1, 0).getDate();
    }

    get dates() {
        const {numDays, firstDay} = this;
        const dates: number[] = [];
        for (let _ = 0; _ < firstDay; _++) {
            dates.push(0);
        }
        for (let date = 1; date <= numDays; date++) {
            dates.push(date);
        }
        return dates;
    }

    render() {
        return (
            <div>
                <CalendarMonthHeader
                    monthNumber={this.month}
                    year={this.year}
                />
                <CalendarMonth
                    dates={this.dates}
                    today={this.today}
                    selectedDate={this.selectedDate}
                    todos={this.todos}
                    selectDate={this.selectDate}
                />
            </div>
        );
    }
}
