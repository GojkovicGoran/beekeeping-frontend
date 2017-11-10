import {DELETE_BEEHIVE, GET_ALL_BEEHIVES, SAVE_BEEHIVE} from "../actions/type";
import moment from "moment";

const beehiveReducer = (state = [], action) => {
    switch (action.type) {

        case SAVE_BEEHIVE :
            return [action.payload, ...state];

        case GET_ALL_BEEHIVES :
           return [action.payload];

        case DELETE_BEEHIVE :
            let positionDeleteBeehive = 0;

            let arrNonDeleteBeehive = state.map((value, index) => {
                if (value.id === action.payload) {
                    positionDeleteBeehive = index;
                }
                return value
            });
            return [
                ...arrNonDeleteBeehive.slice(0, positionDeleteBeehive),
                ...arrNonDeleteBeehive.slice(positionDeleteBeehive + 1)
            ];
        default :
            return state;
    }

};

export default beehiveReducer;
