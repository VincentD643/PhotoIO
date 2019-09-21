import {
    signUp,
    signIn,
    dashboard,
    logout
} from "../actions/passport";


export const signUp = (payload) => dispatch => {
    return fetch("http://localhost:5000/signup/", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(json => {
            dispatch(signUp(json))
        })
};

export const signIn = (payload) => dispatch => {
    return fetch("http://localhost:5000/signin/", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(json => {
            dispatch(signUp(json))
        })
};
