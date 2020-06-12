import {Module} from 'vuex-simple';
import {CalendarModule} from './modules/calendar';
import {TodoListModule} from './modules/todoList';


export class RootModule {
    @Module()
    public todoList = new TodoListModule();

    @Module()
    public calendar = new CalendarModule();
}
