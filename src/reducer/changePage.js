import {CHANGEPAGE} from '../js/consts'

export default (value = 1, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGEPAGE: return payload;
        default: return value;
    }
}