export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const DASHBOARD = 'DASHBOARD';

export const signUp = (payload) => ({
    type: SIGNUP,
    payload
});

export const signIn = (payload) => ({
    type: SIGNIN,
    payload
});

export const logOut = (id, payload) => ({
    type: LOGOUT,
    id,
    payload
});

export const dashboard = (id) => ({
    type: DASHBOARD,
    id
});
