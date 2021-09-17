import * as types from '../types';

const initialStade = {
    isLoggedIn: false,
    token: '',
    user: {},
    isLoading: false
};

export default function login(state = initialStade, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...initialStade };
            return newState;
        }
        default:
            return state;
    }
}
