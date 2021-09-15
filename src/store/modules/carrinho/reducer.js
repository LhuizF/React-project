const initialStade = {
    contador: 0
};

export default function carrinho(state = initialStade, action) {
    switch (action.type) {
        case 'add': {
            const newStade = { ...state };
            newStade.contador += 1;
            return newStade;
        }

        case 'remove': {
            const newStade = { ...state };
            newStade.contador -= 1;
            return newStade;
        }
        default:
            return state;
    }
}
