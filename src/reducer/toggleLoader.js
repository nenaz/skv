import {TOGGLELOADER} from '../js/consts'

export default (toggleLoader = false, action) => {
    const type = action.type
    switch(type) {
        case TOGGLELOADER: return !toggleLoader;
        default: return toggleLoader;
    }
}