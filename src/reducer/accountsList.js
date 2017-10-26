import {CHANGEACCOUNTSLIST} from '../js/consts'

export default (value = [], action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGEACCOUNTSLIST: return payload;
        default: return value;
    }
}