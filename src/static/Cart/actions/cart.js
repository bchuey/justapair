import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../../utils/config';
import { checkHttpStatus, parseJSON } from '../../utils';

import {
	FETCH_CURRENT_CART_REQUEST,
	FETCH_CURRENT_CART_SUCCESS,
	ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
} from '../../constants';

// get csrf token
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
let csrftoken = getCookie('csrftoken');


export function fetch_current_cart_request(){
	return {
		type: FETCH_CURRENT_CART_REQUEST,
	}
}

export function fetch_current_cart_success(cart){
	return {
		type: FETCH_CURRENT_CART_SUCCESS,
		payload: cart,
	}
}

export function fetch_current_cart(){
	// run the fetch req here
	return (dispatch) => {

		dispatch(fetch_current_cart_request());

		return fetch(`${SERVER_URL}/api/v1/cart/`, {
			method: "GET",
			headers: { 
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		})
		.then(checkHttpStatus)
	    .then(parseJSON)
	    .then((response) => {
	    	console.log('the last value of response', response)
	        dispatch(fetch_current_cart_success(response));
	    })
	}
}

export function add_to_cart_request(){
	return {
		type: ADD_TO_CART_REQUEST
	}
}

export function add_to_cart_success(cart){
	return {
		type: ADD_TO_CART_SUCCESS,
		payload: cart,
	}
}

export function add_to_cart(product){
	
	return (dispatch) => {

		dispatch(add_to_cart_request());
		console.log('the csrf token', csrftoken)
		return fetch(`${SERVER_URL}/api/v1/carts/product/add/`, {
			method: "POST",
			headers: {
				"X-CSRFToken": csrftoken, 
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		})
		.then(checkHttpStatus)
	    .then(parseJSON)
	    .then((response) => {
	    	console.log('the last value of response', response)
	        dispatch(add_to_cart_success(response));
	    })
	}
}


