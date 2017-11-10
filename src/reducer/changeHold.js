import { CHANGEHOLD } from '../js/consts'

export default (hold = {}, action) => {
    const {type, payload} = action
    switch (type) {
        case CHANGEHOLD: return payload
        default: return hold
    }
}