let WsConnect = () => {}

WsConnect.prototype.init = (url, protocol) => {
    this.ws = new WebSocket('ws://'+url, protocol)
    // this.ws.onopen = e => this.getStartDataFromServer()
    // this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    // this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    // this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
}

export default new WsConnect();