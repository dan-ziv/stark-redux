export const addTodoAction = task => ({
	type: 'ADD_TODO',
	todo: {
		task,
		completed: false
	}
});

export const markCompleteAction = id => ({
	type: 'MARK_COMPLETE',
	id
});

export const removeAllAction = {
	type: 'REMOVE_ALL'
};
