import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';

import styles from './index.css?module';


interface Props {
    day: string,
}

@Component
export default class CalendarDateHeader extends VueComponent<Props> {
    @Prop()
    private day!: string;

    render() {
        return (
            <div>
                <span class={styles.title}>
                    {this.day}
                </span>
            </div>
        );
    }
}
