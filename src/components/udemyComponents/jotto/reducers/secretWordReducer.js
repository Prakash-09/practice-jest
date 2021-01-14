import { actionTypes } from '../actions/index';

export default function(state = null, action) {
    switch(action.type){
        case actionTypes.SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
}