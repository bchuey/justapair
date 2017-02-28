import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import dataReducer from './data';
import productReducer from '../Products/reducers/products';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    products: productReducer,
    routing: routerReducer
});
