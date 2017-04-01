import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import dataReducer from './data';
import productReducer from '../Products/reducers/products';
import cartReducer from '../Cart/reducers/cart';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    products: productReducer,
    cart: cartReducer,
    form: formReducer,
    routing: routerReducer
});
