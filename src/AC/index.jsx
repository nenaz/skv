import {
    INCREMENT,
    CHANGEVALUE,
    SELECTTRANSACTIONVALUE,
    CHANGERATES
} from '../js/consts'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function changeInputValue(value) {
    return {
        type: CHANGEVALUE,
        payload: value
    }
}

export function selectTransactionCurrency() {
    return {
        type: SELECTTRANSACTIONVALUE
    }
}

export function changeRates() {
    return {
        type: CHANGERATES
    }
}