import {createStore} from './store.js';
import {reducer} from './reducer.js';
import {addAction, markAsCompleteAction, removeAllAction} from './actions.js';

const initialState = {
	todos: [],
	index: 1
};

const store = createStore(reducer, initialState);

console.log(store.getState());

store.dispatch(addAction);
store.dispatch(addAction);
store.dispatch(addAction);

console.log(store.getState());

store.dispatch(markAsCompleteAction)

console.log(store.getState())

store.dispatch(removeAllAction)

console.log(store.getState())
