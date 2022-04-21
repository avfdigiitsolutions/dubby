import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userSigninReducer } from './Reducer/UserReducer';

const initialState = {};
const reducer = combineReducers({
    userSignIn: userSigninReducer,
})
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store