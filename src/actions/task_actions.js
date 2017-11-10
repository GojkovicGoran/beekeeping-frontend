import {COMPLETE_TASK, DELETE_TASK, GET_ALL_TASKS, POSTPONE_TASK, SAVE_TASK, UNCOMPLETED_TASK} from "./type";
import axios from "axios";
import moment from "moment";

export const saveTask = inputsValue => {
    const url = "http://localhost:8080/tasks";
    let task = {
        name: inputsValue,
        createdAt: moment().format("YYYY-MM-DD"),
        completed: false
    };

    return (dispatch) => {
        return axios.post(url, task).then(response => {
            dispatch({
                type: SAVE_TASK,
                payload: response.data
            });
        }).catch(error => {
            console.log(error)
        });
    }
};

export const getAllTasks = () => {
    const urlGet = "http://localhost:8080/tasks";
    return (dispatch) => {
        return axios.get(urlGet).then(response => {
            dispatch({
                type: GET_ALL_TASKS,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
        });
    }
};

export const completeTask = id => {
    const url = "http://localhost:8080/tasks/" + id;
    return (dispatch) => {
        return axios.put(url).then(response => {
            dispatch({
                type: COMPLETE_TASK,
                payload: id
            });
        }).catch(error => {
            console.log(error)
        });
    }
};

export const uncompletedTask = id => {
    const url = "http://localhost:8080/task/" + id;
    const urlGet = "http://localhost:8080/tasks";
    return (dispatch) => {
        axios.post(url).then(response => {
            dispatch({
                type: UNCOMPLETED_TASK,
                payload: id
            });
            return (axios.get(urlGet).then(response => {
                dispatch({
                    type: GET_ALL_TASKS,
                    payload: response.data
                })
            })).catch(error => {
                console.log(error)
            });
        })
    }
};

export const postponeTask = id => {
    const url = "http://localhost:8080/tasks/" + id;
    const urlGet = "http://localhost:8080/tasks";
    return (dispatch) => {
        axios.post(url).then(response => {
            dispatch({
                type: POSTPONE_TASK,
                payload: id
            });
            return (axios.get(urlGet).then(response => {
                dispatch({
                    type: GET_ALL_TASKS,
                    payload: response.data
                })
            })).catch(error => {
                console.log(error)
            });
        })
    }
};

export const deleteTask = id => {
    const url = "http://localhost:8080/task/" + id;
    const urlGet = "http://localhost:8080/tasks";
    return (dispatch) => {
        axios.delete(url).then(response => {
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
            return (axios.get(urlGet).then(response => {
                dispatch({
                    type: GET_ALL_TASKS,
                    payload: response.data
                })
            })).catch(error => {
                console.log(error)
            });
        })
    }
};
