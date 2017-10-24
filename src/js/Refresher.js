class wsRefresher {
    debugger
    constructor(serviceInstance, timeout, firstTimeExpected){
        this.enabled = false
        this.serviceInstance = serviceInstance
        this.timeout = timeout
        this.firstTimeExpected = firstTimeExpected
    }
    // const me = this
    
    // me.view = view;
    // me.elemVisible = elemVisible;
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
                // resolve(() =>{
                    
                        me.serviceInstance.bind(me)
                        resolve('result')
                   
                // })
            })
            req.then(result => {
                setTimeout(() => {
                    me.iteration.bind(me)
                }, me.timeout)
            }, error => {
                console.log('reject')
            })
            // $.when(me.serviceInstance()).done(function(data) {
            //     if (me.enabled) {
            //         setTimeout(me.iteration.bind(me), me.timeout);
            //     }
            // }).fail(function(error) {
            //     console.log(error);
            // });

        }
    };
    stop() {
        this.enabled = false;
    }
}

export default wsRefresher