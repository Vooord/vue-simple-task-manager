import {Component} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import CalendarMonthHeader from './CalendarMonthHeader';
import CalendarMonth from './CalendarMonth';


@Component({
    components: {
        CalendarMonthHeader,
        CalendarMonth,
    },
})
export default class Calendar extends VueComponent {
    get month() {
        return this.$store.state.calendar.month;
    }

    get year() {
        return this.$store.state.calendar.year;
    }

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
        const dates = new Array(numDays + firstDay).fill(0);
        for (let i = firstDay; i < numDays + firstDay; i++) {
            dates[i] = i + 1;
        }
        console.log(dates);
        return dates;
    }


    render() {
        return (
            <div>
                <CalendarMonthHeader />
                <CalendarMonth
                    dates={this.dates}
                />
            </div>
        );
    }
}
