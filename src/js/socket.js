import Utils from './utils'
import wsRefresher from './Refresher'

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

    refreshers = []

    wsCreateRefresher(paramObj, interval, instance) {
        // debugger
        const data = (paramObj.withParameters) ? paramObj.data : {},
            wsReqArr = []
        
        wsReqArr[0] = paramObj.method
        wsReqArr[1] = paramObj.data

        this.refreshers.push(new wsRefresher(instance, 5000, true))
    }

    wsEnableRefreshers() {
        let i = 0
        for (i = this.refreshers.length; i--;) {
            this.refreshers[i].start();
        }
    }

    wsDisableRefreshers() {
        let i = 0
        for (i = this.refreshers.length; i--;) {
            this.refreshers[i].stop();
        }
    }
    
    wsDestroyRefreshers() {
        let i = 0
        for (i = this.refreshers.length; i--;) {
            this.refreshers.shift();
        }
    }
}