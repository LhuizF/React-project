import * as types from '../types';

const initialStade = {
    isLogin: false
};

export default function login(state = initialStade, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            console.log('DEu Bom ;)');
            const newStade = { ...state };
            newStade.isLogin = !newStade.isLogin;
            return newStade;
        }

        case types.LOGIN_REQUEST: {
            console.log('estou faendo a request');
            return state;
        }

        case types.LOGIN_FAILURE: {
            console.log('DEu erro =(');
            return state;
        }

        default:
            return state;
    }
}
