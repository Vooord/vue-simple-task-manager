import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';


interface Props {
    day: string,
}

@Component
export default class CalendarDateHeader extends VueComponent<Props> {
    @Prop()
    private day!: Props['day'];

    render() {
        return (
            <div class={styles.main}>
                <span class={styles.title}>
                    {this.day}
                </span>
            </div>
        );
    }
}
