import { createReducer } from '../../utils';

import {
    FETCH_ALL_PRODUCTS,
} from '../../constants';

const INITIAL_STATE = {
    products: []
}

/*

	export default createReducer(initialState, {
    [DATA_RECEIVE_PROTECTED_DATA]: (state, payload) => {
        return Object.assign({}, state, {
            data: payload.data,
            isFetching: false
        });
    },
    [DATA_FETCH_PROTECTED_DATA_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true
        });
    }
});


*/

export default createReducer(INITIAL_STATE, {
	[FETCH_ALL_PRODUCTS]: (state, payload) => {
		return Object.assign({}, state, {
			products: payload.data,
			isFetching: true,
		})
	}
})

