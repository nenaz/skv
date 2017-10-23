import Utils from './utils'

export default class WsSocket {
    socket
    connect() {
        const me = this
        this.socket = new WebSocket('ws://10.255.14.131:8099','echo-protocol')
        return new Promise((resolve, reject) => {
            me.socket.open = (e) => resolve()
            me.socket.close = (e) => reject()
        })
        // return new Promise(function(resolve, reject){

        // })
    }

    send(str, obj) {
        this.socket.send(JSON.stringify(Utils.handleClickGetRate(str, obj)))
    }
}