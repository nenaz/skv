import {
    INCREMENT,
    CHANGEVALUE,
    SELECTTRANSACTIONVALUE,
    CHANGERATES,
    CHANGEACCOUNTFROM,
    CHANGEACCOUNTTO,
    CHANGEPAGE,
    WSCONNECT,
    CHANGEACCOUNTSLIST,
    TOGGLELOADER,
    CHANGEONERATE
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

export function changeRates(rates) {
    return {
        type: CHANGERATES,
        payload: rates
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

export function wsConnect(obj) {
    return {
        type: WSCONNECT,
        payload: obj
    }
}

export function changeAccountsList(value) {
    return {
        type: CHANGEACCOUNTSLIST,
        payload: value
    }
}

export function toggleLoader() {
    return {
        type: TOGGLELOADER
    }
}

export function changeOneRate(value) {
    return {
        type: CHANGEONERATE,
        payload: value
    }
}