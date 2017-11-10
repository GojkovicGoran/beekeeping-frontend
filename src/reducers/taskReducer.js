import {COMPLETE_TASK, DELETE_TASK, GET_ALL_TASKS, POSTPONE_TASK, SAVE_TASK, UNCOMPLETED_TASK} from "../actions/type";
import moment from "moment";

const taskReducer = (state = [], action) => {
    switch (action.type) {

        case SAVE_TASK :
            return [action.payload, ...state];

        case GET_ALL_TASKS :
            let arrGet = action.payload.map((value) => {
                if (value.createdAt > moment().format("YYYY-MM-DD")) {
                    value = {...value, postpone: true};
                    return value;
                }
                return value;
            });
            return [
                ...arrGet
            ];

        case COMPLETE_TASK:
            let positionComplete = 0;
            let taskComplete = {};

            let arrComplete = state.map((value, index) => {

                if (value.id === action.payload && value.completed === false) {
                    positionComplete = index;
                    taskComplete = {...value, completed: true};
                    return taskComplete;
                }

                return value;
            });

            return [
                ...arrComplete.slice(0, positionComplete),
                ...arrComplete.slice(positionComplete + 1),
                taskComplete
            ];

        case UNCOMPLETED_TASK:
            let positionUncompleted = 0;
            let taskUncompleted = {};

            let arrUncompleted = state.map((value, index) => {

                if (value.id === action.payload && value.completed === true) {
                    positionUncompleted = index;
                    taskUncompleted = {...value, completed: false};
                    return taskUncompleted;
                }

                return value;
            });

            return [
                taskUncompleted,
                ...arrUncompleted.slice(0, positionUncompleted),
                ...arrUncompleted.slice(positionUncompleted + 1)
            ];

        case POSTPONE_TASK :
            let positionPostponeTask = 0;
            let taskPostpone = {};

            let arrPostponeTask = state.map((value, index) => {
                if (value.id === action.payload && value.completed === false) {
                    positionPostponeTask = index;
                    taskPostpone = {...value, postpone: true};
                    return taskPostpone;
                }
                return value
            });
            return [
                taskPostpone,
                ...arrPostponeTask.slice(0, positionPostponeTask),
                ...arrPostponeTask.slice(positionPostponeTask + 1)
            ];

        case DELETE_TASK :
            let positionDeleteTask = 0;

            let arrNonDeleteTask = state.map((value, index) => {
                if (value.id === action.payload) {
                    positionDeleteTask = index;
                }
                return value
            });
            return [
                ...arrNonDeleteTask.slice(0, positionDeleteTask),
                ...arrNonDeleteTask.slice(positionDeleteTask + 1)
            ];
        default :
            return state;
    }

};

export default taskReducer;
