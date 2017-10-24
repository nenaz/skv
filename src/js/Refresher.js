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
        if (!this.enabled) {
            this.enabled = true
            if (this.firstTimeExpected) {
                this.iteration()
            } else {
                setTimeout(this.iteration.bind(this), this.timeout)
            }
        }
    }
    // me.iteration = function() {
    //     var me = this;
    //     if (this.enabled) {
    //         $.when(me.serviceInstance()).done(function(data) {
    //             if (me.enabled) {
    //                 setTimeout(me.iteration.bind(me), me.timeout);
    //             }
    //         }).fail(function(error) {
    //             console.log(error);
    //         });
    //     }
    // };
    stop = function() {
        this.enabled = false;
    }
}

export default wsRefresher