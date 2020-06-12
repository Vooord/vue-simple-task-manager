import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import {MONTHS_NAMES} from '../constants';


interface Props {
    monthNumber: number,
    year: number,
}

@Component
export default class CalendarMonthHeader extends VueComponent<Props> {
    @Prop()
    private monthNumber!: Props['monthNumber'];

    @Prop()
    private year!: Props['year'];

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
