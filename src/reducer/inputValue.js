import {CHANGEVALUE} from '../js/consts'

export default (inputValue = '', action) => {
    const type = action.type
    switch(type) {
        case CHANGEVALUE: return action.payload;
        default: return inputValue;
    }
}