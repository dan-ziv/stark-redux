import {createStore} from './store.js';
import {reducer} from './reducer.js';
import {addItemAction, markCompleteAction, removeAllAction} from './actions.js';

const initialState = {
	todos: []
};

const store = createStore(reducer, initialState);

console.log('store', store.getState());

store.dispatch(addItemAction('go to the supermarket'));

console.log('store', store.getState());

store.dispatch(addItemAction('celebrate tzachi birthday'));

console.log('store', store.getState());

store.dispatch(markCompleteAction(1));

console.log('store', store.getState());

store.dispatch(removeAllAction());

console.log('store', store.getState());
