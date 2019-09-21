import {createStore, applyMiddleware, combineReducers} from 'redux'
import authReducer from './reducers/auth'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    usr: authReducer(),

});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
