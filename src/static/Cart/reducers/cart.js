import { createReducer } from '../../utils';

import {
    FETCH_CURRENT_CART_REQUEST,
    FETCH_CURRENT_CART_SUCCESS,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
} from '../../constants';

const INITIAL_STATE = {
    cart: null,
    product: null,
    isFetching: false,
    isFetched: false,
    statusText: null,
}

export default createReducer(INITIAL_STATE, {

    [FETCH_CURRENT_CART_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true,
            statusText: null,
        });
    },
    [FETCH_CURRENT_CART_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            cart: payload,
            isFetching: false,
            isFetched: true,
        });
    },
    [ADD_TO_CART_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            isFetching: true,
            statusText: null,
        });
    },
	[ADD_TO_CART_SUCCESS]: (state, payload) => {
        // add the latest product to the cart
        // set new state of cart 
        console.log('the cart payload', payload)
		return Object.assign({}, state, {
			// cart: payload,
			isFetching: false,
            isFetched: true,
		});
	}
})

