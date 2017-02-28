import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { SERVER_URL } from '../../utils/config';

import {
    FETCH_ALL_PRODUCTS,
} from '../../constants';

/*
	Sample from kf-web
*/

// export function fetchSkills(){

// 	const request = axios.get(`${process.env.BASE_URL}/api/v1/talent/skills`);

// 	return {
// 		type: FETCH_SKILLS,
// 		payload: request,
// 	}
// }

export function showAllProducts(){
	// return (dispatch) => {

	// 	return fetch(`${SERVER_URL}/api/v1/products/all/`, {
	// 			method: 'GET',
	// 			headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json',
	// 		}
	// 	})
	// };
	const request = fetch(`${SERVER_URL}/api/v1/products/all/`);
	return {
		type: FETCH_ALL_PRODUCTS,
		payload: request,
	}
}

