

// export default function(state, action) {
//     return null;
// }

import { actionTypes } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case actionTypes.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
}