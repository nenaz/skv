export default store => next => action => {
    // const {url, protocol} = action.payload
    // const ws = new WebSocket('ws://' + url, protocol)
    // debugger;
    // console.log('update')
    next(action)
    // return ws
}