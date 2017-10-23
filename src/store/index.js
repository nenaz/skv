import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
// import wsconnect from '../middlewares/wsConnect'

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store