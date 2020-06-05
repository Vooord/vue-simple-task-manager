import {Component} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import CalendarMonthHeader from './CalendarMonthHeader';
import CalendarMonth from './CalendarMonth';

import {NUM_DAYS_IN_WEEK} from './constants';

import styles from './index.css?module';


@Component({
    components: {
        CalendarMonthHeader,
        CalendarMonth,
    },
})
export default class Calendar extends VueComponent {
    // data
    get month() {
        return this.$store.state.calendar.month;
    }

    get year() {
        return this.$store.state.calendar.year;
    }

    // кол-во дней в месяце (дата последнего дня)
    get numDays() {
        return new Date(this.year, this.month + 1, 0).getDate();
    }

    // день недели первого дня месяца (0 - пн, 6 - вск)
    get firstDay() {
        const firstDay = new Date(this.year, this.month, 1).getDay();
        return (firstDay > 0) ? firstDay - 1 : 6;
    }

    // день недели последнего дня месяца (0 - пн, 6 - вск)
    get lastDay() {
        const lastDay = new Date(this.year, this.month + 1, 0).getDay();
        return (lastDay > 0) ? lastDay - 1 : 6;
    }

    get numDaysInFirstWeek() {
        return NUM_DAYS_IN_WEEK - this.firstDay;
    }

    get numDaysInLastWeek() {
        return this.lastDay + 1;
    }

    // кол-во недель в месяце
    get numWeeks() {
        return ((this.numDays - this.numDaysInFirstWeek - this.numDaysInLastWeek) / 7) + 2;
    }

    get numFullWeeks() {
        return this.numWeeks - 2;
    }

    get datesInFirstWeek() {
        return this.generateDatesInWeek(1, this.firstDay, this.numDaysInFirstWeek);
    }

    get datesInLastWeek() {
        return this.generateDatesInWeek(this.numDays - this.numDaysInLastWeek + 1, 0, this.numDaysInLastWeek);
    }

    get datesInMiddleWeeks() {
        const startDates = [];
        for (let i = 0; i < this.numFullWeeks; i += 1) {
            startDates[i] = this.datesInFirstWeek[6] + 1 + (i * 7);
        }
        return startDates.map(startDate => this.generateDatesInWeek(startDate, 0, 7));
    }

    get datesPerWeek() {
        return [
            this.datesInFirstWeek,
            ...this.datesInMiddleWeeks,
            this.datesInLastWeek,
        ];
    }

    generateDatesInWeek(startDate: number, startDay: number, numDays: number): number[] {
        const datesInWeek: number[] = new Array(7).fill(0);
        for (let i = startDay; i < startDay + numDays; i += 1) {
            datesInWeek[i] = startDate + i;
        }
        return datesInWeek;
    }


    render() {
        return (
            <div class={styles.main}>
                <CalendarMonthHeader />
                <CalendarMonth
                    datesPerWeek={this.datesPerWeek}
                />
            </div>
        );
    }
}
