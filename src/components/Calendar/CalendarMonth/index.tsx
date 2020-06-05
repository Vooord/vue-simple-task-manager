import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import CalendarWeek from '../CalendarWeek';
import CalendarDateHeader from '../CalendarDateHeader';

import {DAYS_NAMES} from '../constants';

interface Props {
    datesPerWeek: number[][],
}

@Component({
    components: {
        CalendarDateHeader,
        CalendarWeek,
    },
})
export default class CalendarMonth extends VueComponent<Props> {
    @Prop()
    private datesPerWeek!: number[][];

    render() {
        return (
            <div>
                <div class={styles.weekHeader}>
                    {DAYS_NAMES.map(day =>
                        <CalendarDateHeader
                            day={day}
                            key={day}
                        />)}
                </div>
                <div class={styles.weeks}>
                    {this.datesPerWeek.map((weekDates, index) =>
                        <CalendarWeek
                            key={index}
                            weekDates={weekDates}
                        />)}
                </div>
            </div>
        );
    }
}
