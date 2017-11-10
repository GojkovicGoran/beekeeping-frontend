import {DELETE_APIARY_SITE, GET_ALL_APIARY_SITES, SAVE_APIARY_SITE} from "../actions/type";
import moment from "moment";

const apiarySiteReducer = (state = [], action) => {
    switch (action.type) {

        case SAVE_APIARY_SITE :
            return [action.payload, ...state];

        case GET_ALL_APIARY_SITES :
            return [action.payload];

        case DELETE_APIARY_SITE :
            let positionDeleteApiarySite = 0;

            let arrNonDeleteApiarySite = state.map((value, index) => {
                if (value.id === action.payload) {
                    positionDeleteApiarySite = index;
                }
                return value
            });
            return [
                ...arrNonDeleteApiarySite.slice(0, positionDeleteApiarySite),
                ...arrNonDeleteApiarySite.slice(positionDeleteApiarySite + 1)
            ];
        default :
            return state;
    }

};

export default apiarySiteReducer;
