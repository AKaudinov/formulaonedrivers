import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import driversReducer from "../reducers/drivers"; //import drivers reducer
import filtersReducer from "../reducers/filters"; //import filters reducer
import reduxThunk from 'redux-thunk'; //import redux thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //use devtools or just a standard compose

export default () => {
    return createStore( //return the created store
        combineReducers({
            drivers: driversReducer,
            filters: filtersReducer,
        }),
        composeEnhancers(applyMiddleware(reduxThunk))
    );
};
