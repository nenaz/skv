import {STARTANIMATION} from '../js/consts'

export default (startAnimation = false, action) => {
    const type = action.type
    switch(type) {
        case STARTANIMATION: return !startAnimation
        default: return startAnimation
    }
}