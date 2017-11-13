import { OPERSTATUS } from  '../js/consts'

export default (operStatus = 'PENDING', action) => {
    const { type, payload } = action
    switch(type) {
        case OPERSTATUS: return payload
        default: return operStatus
    }
}