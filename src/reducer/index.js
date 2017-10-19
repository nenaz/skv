import { combineReducers } from 'redux'
import counterReducer from './counter'
import inputValue from './inputValue'
import selectedButton from './selectionButtons'
import rates from './rates'

export default combineReducers({
    count: counterReducer,
    inputValue,
    selectedButton,
    rates
})