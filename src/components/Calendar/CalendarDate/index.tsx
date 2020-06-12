import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import CalendarContainer from '@/containers/Calendar';

import styles from './index.css?module';


interface Props {
    date: number,
    isToday: boolean,
    isSelected: boolean,
    isFilled: boolean,
    selectDate: CalendarContainer['selectDate'],
}

@Component
export default class CalendarDate extends VueComponent<Props> {
    @Prop()
    private date!: Props['date'];

    @Prop()
    private isToday!: Props['isToday']

    @Prop()
    private isSelected!: Props['isSelected']

    @Prop()
    private isFilled!: Props['isFilled']

    @Prop()
    private selectDate!: Props['selectDate']

    render() {
        return (
            <div
                class={styles.main}
                onClick={() => this.selectDate(this.date)}
                today={this.isToday}
                selected={this.isSelected}
                hidden={this.date === 0}
            >
                <span
                    class={styles.date}
                    filled={this.isFilled}
                    selected={this.isSelected}
                >{ this.date }</span>
            </div>
        );
    }
}
