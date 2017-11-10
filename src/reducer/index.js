import { combineReducers } from 'redux'
import counterReducer from './counter'
import inputValue from './inputValue'
import selectedButton from './selectionButtons'
import rates from './rates'
import changeAccountFrom from './changeAccountFrom'
import changeAccountTo from './changeAccountTo'
import changePage from './changePage'
import accountsList from './accountsList'
import wsConnect from './wsconnect'
import toggleLoader from './toggleLoader'
import changeOneRate from './changeOneRate'
import startAnimation from './startAnimation'
import changeHold from './changeHold'

export default combineReducers({
    count: counterReducer,
    inputValue,
    selectedButton,
    rates,
    changeAccountFrom,
    changeAccountTo,
    changePage,
    accountsList,
    wsConnect,
    toggleLoader,
    changeOneRate,
    startAnimation,
    changeHold
})