import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import CalendarDateHeader from '../CalendarDateHeader';
import CalendarDate from '../CalendarDate';

import {DAYS_NAMES} from '../constants';

interface Props {
    dates: number[],
}

@Component({
    components: {
        CalendarDateHeader,
        CalendarDate,
    },
})
export default class CalendarMonth extends VueComponent<Props> {
    @Prop()
    private dates!: number[];

    render() {
        return (
            <div>
                <div class={styles.datesHeader}>
                    {DAYS_NAMES.map(day =>
                        <CalendarDateHeader
                            day={day}
                            key={day}
                        />)}
                </div>
                <div class={styles.dates}>
                    {this.dates.map((date, index) =>
                        <CalendarDate
                            key={index}
                            date={date}
                        />)}
                </div>
            </div>
        );
    }
}
