import { DELETE_BEEHIVE, GET_ALL_BEEHIVES, SAVE_BEEHIVE } from "./type";
import axios from "axios";
import moment from "moment";

export const saveBeehive = inputsValue => {
    const url = "http://localhost:8080/beehives";
    let beehive = {
        type: inputsValue.type,
        createdAt: moment().format("YYYY-MM-DD"),
        description: inputsValue.description,
        queenColor: inputsValue.queenColor,
        number: inputsValue.number,
        notice: inputsValue.notice,
        apiarySite: inputsValue.apiarySite
    };

    return (dispatch) => {
        return axios.post(url, beehive).then(response => {
            dispatch({
                type: SAVE_BEEHIVE,
                payload: response.data
            });
        }).catch(error => {
            console.log(error)
        });
    }
};

export const getAllBeehives = () => {
    const urlGet = "http://localhost:8080/beehives";
    return (dispatch) => {
        return axios.get(urlGet).then(response => {
            dispatch({
                type: GET_ALL_BEEHIVES,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
        });
    }
};

export const deleteBeehive = id => {
    const url = "http://localhost:8080/beehive/" + id;
    const urlGet = "http://localhost:8080/beehives";
    return (dispatch) => {
        axios.delete(url).then(response => {
            dispatch({
                type: DELETE_BEEHIVE,
                payload: id
            });
            return (axios.get(urlGet).then(response => {
                dispatch({
                    type: GET_ALL_BEEHIVES,
                    payload: response.data
                })
            })).catch(error => {
                console.log(error)
            });
        })
    }
};
