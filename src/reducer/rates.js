import {CHANGERATES} from '../js/consts'

export default (rates = [], action) => {
    const {type, payload} = action
    switch(type) {
        case CHANGERATES: return payload;
        default: return rates;
    }
}