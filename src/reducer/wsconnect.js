import {WSCONNECT} from '../js/consts'

export default (ws = {}, action) => {
    const {type, payload} = action.type
    switch(type) {
        case WSCONNECT: return payload;
        default: return ws;
    }
}