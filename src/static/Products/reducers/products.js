import { createReducer } from '../../utils';

import {
    SHOW_ALL_PRODUCTS_REQUEST,
    SHOW_ALL_PRODUCTS_SUCCESS,
    FETCH_SINGLE_PRODUCT_REQUEST,
    FETCH_SINGLE_PRODUCT_SUCCESS,
} from '../../constants';

const INITIAL_STATE = {
    products: [],
    product: null,
    isFetching: false,
    isFetched: false,
    statusText: null,
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
    [SHOW_ALL_PRODUCTS_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true,
            statusText: null,
        });
    },
	[SHOW_ALL_PRODUCTS_SUCCESS]: (state, payload) => {
        console.log("the all products payload", payload);
		return Object.assign({}, state, {
			products: payload.results,
			isFetching: false,
            isFetched: true,
		});
	},
    [FETCH_SINGLE_PRODUCT_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true,
            statusText: null,
        });
    },
    [FETCH_SINGLE_PRODUCT_SUCCESS]: (state, payload) => {
        console.log("the single product payload", payload);
        return Object.assign({}, state, {
            product: payload,
            isFetching: false,
            isFetched: true,
        });
    }
})

