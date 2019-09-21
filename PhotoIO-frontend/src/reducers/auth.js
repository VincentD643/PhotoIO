import {
    SIGNUP,
    SIGNIN,
    LOGOUT,
    DASHBOARD
} from '../actions/passport'

const initialState = {
    users: []
};

function auth(state = initialState, action) {
    if (action.type === SIGNIN) {

    }

    if (action.type === SIGNUP) {

    }
    if (action.type === LOGOUT) {

    }

    if (action.type === DASHBOARD) {

    }

    return state;
}

export default auth;
