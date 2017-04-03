import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { combineForms } from 'react-redux-form';
import authReducer from './auth';
import dataReducer from './data';
import productReducer from '../Products/reducers/products';
import cartReducer from '../Cart/reducers/cart';


// give initial state of each form
const initialShippingState = {
	firstName: '',
	lastName: '',
	streetAddress: '',
	city: '',
	state: '',
	zipCode: '',
	phoneNumber: '',
};

const initialBillingState = {
	cardHolder: '',
	ccNumber: '',
	expDate: '',
	cvv: '',
};


export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    products: productReducer,
    cart: cartReducer,
    form: formReducer,
    deep: combineForms({
    	shippingForm: initialShippingState,
	    billingForm: initialBillingState,
	}, 'deep'),
    routing: routerReducer
});
