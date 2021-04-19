import { INCREASE_VALUE } from "../constants";

let inetialState = {
    count: 0
}

export default function counterReducer(state=inetialState, action){
    switch(action.type){
        case INCREASE_VALUE:
            return{
                ...state,
                count: state.count+1
            }
        default: return state;
    }
}