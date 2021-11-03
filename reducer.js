import {actions} from './actions.js';

export function reducer(state, action) {
	switch (action.type) {
		case actions.REMOVE_ALL: {
			return {
				todos: []
			}
		}

		case actions.ADD_ITEM: {
			return {
				todos: [...state.todos, {...action.todo, id: state.todos.length}]
			}
		}

		case actions.MARK_COMPLETE: {
			const todos = [...state.todos];
			const todo = todos.find(todo => todo.id === action.id);
			todo.completed = true;
			return {
				todos
			}
		}
	}
}
