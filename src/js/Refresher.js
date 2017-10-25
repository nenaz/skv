class wsRefresher {
    constructor(serviceInstance, timeout, firstTimeExpected){
        this.enabled = false
        this.serviceInstance = serviceInstance
        this.timeout = timeout
        this.firstTimeExpected = firstTimeExpected
    }

    start() {
        var me = this
        if (!this.enabled) {
            this.enabled = true
            if (this.firstTimeExpected) {
                this.iteration()
            } else {
                setTimeout(me.iteration.bind(me), me.timeout)
            }
        }
    }

    iteration() {
        var me = this;
        if (this.enabled) {
            let req = new Promise((resolve, rejected) => {
                me.serviceInstance('GetRate')
                // console.log('instance')
                resolve('result')
            })
            req.then(result => {
                setTimeout(() => {
                    me.iteration.call(me)
                }, me.timeout)
            }, error => {
                console.log(error)
            }).catch(e => {
                console.log('CATCH = ' + e)
            })
        }
    };
    stop() {
        this.enabled = false;
    }
}

export default wsRefresher