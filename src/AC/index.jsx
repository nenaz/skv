import {
    INCREMENT,
    CHANGEVALUE,
    SELECTTRANSACTIONVALUE,
    CHANGERATES,
    CHANGEACCOUNTFROM,
    CHANGEACCOUNTTO
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

export function changeAccountFrom(value) {
    return {
        type: CHANGEACCOUNTFROM,
        payload: value
    }
}

export function changeAccountTo(value) {
    return {
        type: CHANGEACCOUNTTO,
        payload: value
    }
}