import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'NOME-DO-APP // REACT-BASE',
            storage,
            whitelist: ['login', 'carrinho']
        },
        reducers
    );

    return persistedReducer;
};
