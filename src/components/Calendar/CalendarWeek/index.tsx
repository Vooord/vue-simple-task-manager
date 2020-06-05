import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';

import CalendarDate from '@/components/Calendar/CalendarDate';

interface Props {
    weekDates: number[],
}

@Component({
    components: {
        CalendarDate,
    },
})
export default class CalendarWeek extends VueComponent<Props> {
    @Prop()
    private weekDates!: number[]

    render() {
        return (
            <div class={styles.main}>
                {this.weekDates.map((date, index) =>
                    <CalendarDate
                        key={index}
                        date={date}
                    />)}
            </div>
        );
    }
}
