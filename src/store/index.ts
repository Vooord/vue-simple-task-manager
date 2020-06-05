import Vue from 'vue';
import Vuex from 'vuex';

import {calendar, CalendarState} from '@/store/calendar';
import {todoList, TodoListState} from '@/store/todoList';


Vue.use(Vuex);

export interface AppState {
  calendar: CalendarState,
  todoList: TodoListState,
}

export default new Vuex.Store<AppState>({
    modules: {
        calendar,
        todoList,
    },
});
