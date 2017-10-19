import {CHANGEACCOUNTFROM} from '../js/consts'

export default (value = null, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGEACCOUNTFROM: return payload;
        default: return value;
    }
}