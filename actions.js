export const actions = {
	ADD_ITEM: 'ADD_ITEM',
	MARK_COMPLETE: 'MARK_COMPLETE',
	REMOVE_ALL: 'REMOVE_ALL'
};

export const addItemAction = text => ({
	type: actions.ADD_ITEM,
	todo: {
		text,
		completed: false
	}
});

export const markCompleteAction = id => ({
	type: actions.MARK_COMPLETE,
	id
});

export const removeAllAction = () => ({
	type: actions.REMOVE_ALL
})
