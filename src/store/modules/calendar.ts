import {State, Action, Mutation} from 'vuex-simple';


export const DATE_SELECT = 'DATE_SELECT';

const DEFAULT_DATE = new Date(); // today


export class CalendarModule {
    @State()
    public selectedDate = DEFAULT_DATE.getDate();

    @State()
    public todayDate = DEFAULT_DATE.getDate();

    @State()
    public month = DEFAULT_DATE.getMonth();

    @State()
    public year = DEFAULT_DATE.getFullYear();

    @Mutation()
    selectDate(payload: number) {
        this.selectedDate = payload;
    }

    @Action()
    [DATE_SELECT](payload: number) {
        this.selectDate(payload);
    }
}
