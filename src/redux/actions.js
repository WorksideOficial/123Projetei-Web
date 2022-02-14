import * as types from "./actionTypes";
import api from "../services/api";

const getUser = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
    type: types.DELETE_USER
});

const userAdded = () => ({
    type: types.ADD_USER
});

const userUpdated = () => ({
    type: types.UPDATE_USER
});

const getSingUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
});

export const loadUsers = () => {
    return function(dispatch){
        api.get('/list').then((resp) => {
            dispatch(getUser(resp.data.users));
        }).catch((error) => console.log(error))
    }
};

export const deleteUser = (id) => {
    return function(dispatch){
        api.delete(`/delete/${id}`).then((resp) => {
            dispatch(userDeleted());
            dispatch(loadUsers());
        }).catch((error) => console.log(error))
    }
};

export const addUser = (user) => {
    return function(dispatch){
        api.post(`/create`, user).then((resp) => {
            dispatch(userAdded());
        }).catch((error) => console.log(error))
    }
};


export const getSingleUser = (id) => {
    return function(dispatch){
        api.get(`/viewuser/${id}`).then((resp) => {
            dispatch(getSingUser(resp.data.user));
        }).catch((error) => console.log(error))
    }
};

export const updateUser = (user) => {
    return function(dispatch){
        api.put(`/edit`, user).then((resp) => {
            dispatch(userUpdated());
        }).catch((error) => console.log(error))
    }
};