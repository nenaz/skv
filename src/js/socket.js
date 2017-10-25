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

        

        // var data = (paramObj.withParameters) ? paramObj.data : {},
        //     amount = page.manualAmountInput,
        //     elemVis = true,
        //     wsReqArr = [];
        // wsReqArr[0] = paramObj.method;
        // wsReqArr[1] = paramObj.data;
        // if (paramObj.withParameters && paramObj.method === 'SubRate') {
        //     if (page.indexSelButton) {
        //         data.amountto = amount;
        //     } else {
        //         data.amountfrom = amount;
        //     }
        // }
        // // page.wsRefreshers.push(new wsRefresher(wsGetStartRates.bind(page, wsReqArr), interval, true, page, elemVis));
        // page.wsRefreshers.push(new wsRefresher(this.sendMessage.bind(page, page, paramObj.method, paramObj.data), interval, true, page, elemVis));
        // window.wsRefreshers = page.wsRefreshers;
        // page.wsEnableRefreshers = function() {
        //     var i = 0;
        //     for (i = wsRefreshers.length; i--;) {
        //         page.wsRefreshers[i].start();
        //     }
        // };
        // page.wsDisableRefreshers = function() {
        //     var i = 0;
        //     for (i = page.wsRefreshers.length; i--;) {
        //         page.wsRefreshers[i].stop();
        //     }
        // };
        // page.wsDestroyRefreshers = function() {
        //     var i;
        //     for (i = 0; i <= page.wsRefreshers.length; i++) {
        //         page.wsRefreshers.shift();
        //     }
        // };
        // page.wsEnableThisRefresher = function(num) {
        //     page.wsRefreshers[num].start();
        // };
        // page.wsDisableThisRefresher = function(num) {
        //     page.wsRefreshers[num].stop();
        // };
        // return page.wsRefreshers.length - 1;
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