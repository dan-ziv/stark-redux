import {createStore} from './store.js';
import {reducer} from './reducer.js';
import {addTodoAction, markCompleteAction, removeAllAction} from './actions.js';

const initialState = {
	todos: []
}

const store = createStore(reducer, initialState);

console.log('Initial state', store.getState());

store.dispatch(addTodoAction('go to the supermarket'));
store.dispatch(addTodoAction('pick up my car from the garage'));

console.log('After adding some todos', store.getState());

store.dispatch(markCompleteAction(1));

console.log('After mark as complete', store.getState());

store.dispatch(removeAllAction);

console.log('After removing all', store.getState());

