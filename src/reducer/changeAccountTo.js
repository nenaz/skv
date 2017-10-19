import {CHANGEACCOUNTTO} from '../js/consts'

export default (value = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGEACCOUNTTO: return payload;
        default: return value;
    }
}