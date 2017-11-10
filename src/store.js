import {applyMiddleware, combineReducers, createStore} from "redux";
import beehiveReducer from "./reducers/beehiveReducer";
import apiaryReducer from "./reducers/apiarySiteReducer";
import filterReducer from "./reducers/filterReducer";
import taskReducer from "./reducers/taskReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";



const reducers = combineReducers({
    beehiveReducer,
    apiaryReducer,
    filterReducer,
    taskReducer
});

const store = createStore(
    reducers,
    applyMiddleware(
        logger(),
        thunk
    )
);

export default store;