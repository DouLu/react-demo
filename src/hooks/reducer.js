export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case 'login':
			return { ...state, ...action.payload };
		case 'expire':
			return { ...action.payload };
		default:
			throw new Error('Unexpected login action');
	}
};
