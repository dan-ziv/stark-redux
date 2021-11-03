class Store {
	constructor(reducer, initialState) {
		this.state = initialState;
		this.reducer = reducer;
		this.listeners = [];
	}

	getState() {
		return this.state;
	}

	subscribe(listener) {
		this.listeners.push(listener);
	}

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		this.listeners.forEach(listener => listener(this.state));
	}
}

export function createStore(reducer, initialState) {
	return new Store(reducer, initialState);
}
