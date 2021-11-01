export const addAction = {
	type: 'ADD_TODO',
	todo: {
		task: 'Go to the supermarket',
		completed: false
	}
};

export const markAsCompleteAction = {
	type: 'MARK_COMPLETE',
	id: 1
};

export const removeAllAction = {
	type: 'REMOVE_ALL'
};
