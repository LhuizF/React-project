import { combineReducers } from 'redux';

import carrinho from './carrinho/reducer';
import login from './login/reducer';

export default combineReducers({
    carrinho,
    login
});
