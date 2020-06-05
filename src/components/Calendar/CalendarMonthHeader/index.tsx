import {Component} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import {MONTHS_NAMES} from '../constants';


@Component
export default class CalendarMonthHeader extends VueComponent {
    get monthNumber(): number {
        return this.$store.state.calendar.month;
    }

    get year(): number {
        return this.$store.state.calendar.year;
    }

    get month(): string {
        return MONTHS_NAMES[this.monthNumber];
    }

    render() {
        return (
            <div class={styles.main}>
                <div class={styles.title}>
                    { this.month } { this.year }
                </div>
            </div>
        );
    }
}
