import {
    INCREMENT,
    CHANGEVALUE,
    SELECTTRANSACTIONVALUE,
    CHANGERATES,
    CHANGEACCOUNTFROM,
    CHANGEACCOUNTTO,
    CHANGEPAGE,
    WSCONNECT
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

export function changePage(value) {
    return {
        type: CHANGEPAGE,
        payload: value
    }
}

export function wsConnect(url, protocol) {
    return {
        type: WSCONNECT,
        payload: {
            url,
            protocol
        }
    }
}