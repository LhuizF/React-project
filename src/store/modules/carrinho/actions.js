import * as types from '../types';

export function addOne() {
    return {
        type: types.add
    };
}

export function removeOne() {
    return {
        type: types.remove
    };
}
