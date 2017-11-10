import {DELETE_APIARY_SITE, GET_ALL_APIARY_SITES, SAVE_APIARY_SITE} from "./type";
import axios from "axios";
import moment from "moment";

export const saveApiarySite = inputsValue => {
    const url = "http://localhost:8080/apiary";
    let apiarySite = {
        name: inputsValue.name,
        createdAt: moment().format("YYYY-MM-DD"),
        description: inputsValue.description,
        notice: inputsValue.notice
    };

    return (dispatch) => {
        return axios.post(url, apiarySite).then(response => {
            dispatch({
                type: SAVE_APIARY_SITE,
                payload: response.data
            });
        }).catch(error => {
            console.log(error)
        });
    }
};

export const getAllApiarySites = () => {
    const urlGet = "http://localhost:8080/apiary";
    return (dispatch) => {
        return axios.get(urlGet).then(response => {
            dispatch({
                type: GET_ALL_APIARY_SITES,
                payload: response.data
            })
        }).catch(error => {
            console.log(error)
        });
    }
};

export const deleteApiarySite = id => {
    const url = "http://localhost:8080/apiary/" + id;
    const urlGet = "http://localhost:8080/apiary";
    return (dispatch) => {
        axios.delete(url).then(response => {
            dispatch({
                type: DELETE_APIARY_SITE,
                payload: id
            });
            return (axios.get(urlGet).then(response => {
                dispatch({
                    type: GET_ALL_APIARY_SITES,
                    payload: response.data
                })
            })).catch(error => {
                console.log(error)
            });
        })
    }
};
