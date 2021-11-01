export function reducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [
					...state.todos,
					{
						id: state.todos.length + 1,
						...action.todo
					}
				]
			}
		case 'MARK_COMPLETE':
			const todo = state.todos.find(todo => todo.id === action.id);
			todo.completed = true;
			return {
				todos: [...state.todos]
			}
		case 'REMOVE_ALL':
			return {
				todos: []
			}
	}
}
