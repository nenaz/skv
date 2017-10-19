import {SELECTTRANSACTIONVALUE} from '../js/consts'

export default (selectedButton = false, action) => {
    const type = action.type
    switch(type) {
        case SELECTTRANSACTIONVALUE: return !selectedButton
        default: return selectedButton 
    }
}