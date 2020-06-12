import {State, Action, Mutation} from 'vuex-simple';


export const wrapAction = (action: string) => `calendar/${action}`;

export const DATE_SELECT = 'DATE_SELECT';

const TODAY = new Date();


export class CalendarModule {
    @State()
    public selectedDate = TODAY.getDate();

    @State()
    public todayDate = TODAY.getDate();

    @State()
    public month = TODAY.getMonth();

    @State()
    public year = TODAY.getFullYear();

    @Mutation()
    selectDate(payload: number) {
        this.selectedDate = payload;
    }

    @Action()
    [DATE_SELECT](payload: number) {
        this.selectDate(payload);
    }
}
