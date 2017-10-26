import {
    INCREMENT,
    CHANGEVALUE,
    SELECTTRANSACTIONVALUE,
    CHANGERATES,
    CHANGEACCOUNTFROM,
    CHANGEACCOUNTTO,
    CHANGEPAGE,
    WSCONNECT,
    CHANGEACCOUNTSLIST
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

export function wsConnect(url, protocol) {
    return {
        type: WSCONNECT,
        payload: {
            url,
            protocol
        }
    }
}

export function changeAccountsList(value) {
    return {
        type: CHANGEACCOUNTSLIST,
        payload: value
    }
}