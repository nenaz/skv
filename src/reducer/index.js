import { combineReducers } from 'redux'
import counterReducer from './counter'
import inputValue from './inputValue'
import selectedButton from './selectionButtons'
import rates from './rates'
import changeAccountFrom from './changeAccountFrom'
import changeAccountTo from './changeAccountTo'
import changePage from './changePage'

export default combineReducers({
    count: counterReducer,
    inputValue,
    selectedButton,
    rates,
    changeAccountFrom,
    changeAccountTo,
    changePage
})