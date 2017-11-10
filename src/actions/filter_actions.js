import {SET_VISIBILITY_FILTER} from "./type";

export const setVisibilityFilter = filter => {
    return (dispatch) => {
        dispatch({
            type: SET_VISIBILITY_FILTER,
            filter
        })
    }
};
