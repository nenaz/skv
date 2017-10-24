import Utils from './utils'

export default class WsSocket {
    socket
    connect(url, protocol) {
        const me = this
        this.socket = new WebSocket(url, protocol)
        return new Promise((resolve, reject) => {
            me.socket.onopen = (e) => resolve(true)
            me.socket.onerror = (e) => reject(e)
            me.socket.onmessage = (e) => this.newData(e)
        })
    }

    sendMessage(str, obj) {
        this.socket.send(JSON.stringify(Utils.handleClickGetRate(str, obj)))
    }

    // newData(e) {
    //     return e.data
    // }
}