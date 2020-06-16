import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import CalendarContainer from '@/containers/Calendar';

import styles from './index.css?module';

import CalendarDateHeader from '../CalendarDateHeader';
import CalendarDate from '../CalendarDate';

import {DAYS_NAMES} from '../constants';

interface Props {
    firstDay: number,
    dates: number[],
    todos: CalendarContainer['todos'],
    today: CalendarContainer['today'],
    selectedDate: CalendarContainer['selectedDate'],
    selectDate: CalendarContainer['selectDate'],
}

@Component
export default class CalendarMonth extends VueComponent<Props> {
    @Prop()
    private firstDay!: Props['firstDay'];

    @Prop()
    private dates!: Props['dates'];

    @Prop()
    private today!: Props['today']

    @Prop()
    private selectedDate!: Props['selectedDate']

    @Prop()
    private todos!: Props['todos']

    @Prop()
    private selectDate!: Props['selectDate']

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
                    {new Array(this.firstDay).fill(0).map(() => <span/>)}
                    {this.dates.map((date, index) =>
                        <CalendarDate
                            key={index}
                            date={date}
                            isSelected={date === this.selectedDate}
                            isToday={date === this.today}
                            isFilled={!!(this.todos[date] && this.todos[date].length)}
                            selectDate={this.selectDate}
                        />)}
                </div>
            </div>
        );
    }
}
