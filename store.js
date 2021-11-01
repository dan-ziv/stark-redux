class Store {
	constructor(reducer, initialState = {}) {
		this.reducer = reducer;
		this.state = initialState;
		this.listeners = [];
	}

	getState() {
		return this.state;
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		this.listeners.forEach(listener => listener());
	}

	subscribe(listener) {
		this.listeners.push(listener);
	}
}

export function createStore(reducer, initialState) {
	return new Store(reducer, initialState);
}

