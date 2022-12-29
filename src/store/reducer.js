import { ADDITION,SUBTRACT } from "./actionType";

export default function mainREducer (state = {},action){
    switch(action.type) {
        case ADDITION:
            return {...state,Images:ImageData}
        case SUBTRACT:
            return {...state,Images:ImageData}
        default:
            return state
    }
}