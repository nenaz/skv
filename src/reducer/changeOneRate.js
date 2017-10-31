import {CHANGEONERATE} from '../js/consts'

export default (rate = {
    a: '00.000',
    b: '00.000'
}, action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGEONERATE: return payload
        default: return rate
    }
}