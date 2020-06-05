import {Module} from 'vuex';


export const wrapAction = (action: string) => `calendar/${action}`;

export const DATE_SELECT = 'DATE_SELECT';

const TODAY = new Date();

export interface CalendarState {
    selectedDate: number,

    todayDate: number,
    month: number,
    year: number,
}

export const calendar: Module<CalendarState, {}> = {
    namespaced: true,

    state: {
        selectedDate: TODAY.getDate(),

        todayDate: TODAY.getDate(),
        month: TODAY.getMonth(),
        year: TODAY.getFullYear(),
    },

    mutations: {
        [DATE_SELECT](state, payload) {
            state.selectedDate = payload;
        },
    },

    actions: {
        [DATE_SELECT](context, payload) {
            context.commit(DATE_SELECT, payload);
        },
    },
};
