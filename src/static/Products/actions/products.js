import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../../utils/config';
import { checkHttpStatus, parseJSON } from '../../utils';

import {
	SHOW_ALL_PRODUCTS_REQUEST,
	SHOW_ALL_PRODUCTS_SUCCESS,
	FETCH_SINGLE_PRODUCT_REQUEST,
	FETCH_SINGLE_PRODUCT_SUCCESS
} from '../../constants';

export function showAllProductsRequest(){
	return {
		type: SHOW_ALL_PRODUCTS_REQUEST
	}
}

export function showAllProductsSuccess(products){
	return {
		type: SHOW_ALL_PRODUCTS_SUCCESS,
		payload: products,
	}
}

export function showAllProducts(){
	return (dispatch) => {

		dispatch(showAllProductsRequest());

		return fetch(`${SERVER_URL}/api/v1/products/all/`, {
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
	        dispatch(showAllProductsSuccess(response));
	    })
	}
}

// Fetch Single Product
export function fetch_single_product_request(){
	return {
		type: FETCH_SINGLE_PRODUCT_REQUEST
	}
}

export function fectch_single_product_success(product){
	return {
		type: FETCH_SINGLE_PRODUCT_SUCCESS,
		payload: product,
	}
}

export function fetch_single_product(product_id){
	return (dispatch) => {

		dispatch(fetch_single_product_request());

		return fetch(`${SERVER_URL}/api/v1/products/${product_id}/`, {
			method: "GET",
			headers: { 
				"Accept": "application/json",
				"Content-Type": "application/json",
			}
		})
		.then(checkHttpStatus)
	    .then(parseJSON)
	    .then((response) => {
	    	console.log('the last value of response', response.results[0])
	        dispatch(fectch_single_product_success(response.results[0]));
	    })
	}
}

