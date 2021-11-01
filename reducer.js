export function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [...state.todos, {id: state.index, ...action.todo}],
				index: state.index + 1
			};

		case 'MARK_COMPLETE':
			const item = state.todos.find(item => item.id === action.id);
			item.completed = true;
			return {
				...state
			};

		case 'REMOVE_ALL':
			return {
				todos: [],
				index: state.index
			};
	}
}
