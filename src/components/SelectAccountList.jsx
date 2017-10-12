import React, { Component } from 'react'
import SelectAccountHeader from './SelectAccountHeader'
import SelectAccountBody from './SelectAccountBody'

export default class SelectAccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // accontsList: {}
        }

        // this.startAccountsFromServer = this.startAccountsFromServer.bind(this)
        // this.wsOnMessageEvent = this.wsOnMessageEvent.bind(this)
        // this.props.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    }

    // componentDidMount() {
    //     console.log('componentDidMount TableRatesBlock')
    //     this.startAccountsFromServer();
    // }

    // startAccountsFromServer() {
    //     let me = this
    //     // setTimeout(() => {
    //         me.props.ws.send(JSON.stringify(utils.handleClickGetRate('GetAccounts', {client: "2041232"})));
    //     // }, 5000)
    // }

    // wsOnMessageEvent(data) {
    //     if (data[0] === 'Accounts') {
    //         this.setState({ accontsList: data[1].accounts })
    //     }
    // }

    // preRender() {
    //     return <div>333</div>
    // }

    render() {
        console.log('render list')
        return (
            <div className="dpSidebar dpToggledBlock ccAccountAnimationIn">
                <SelectAccountHeader />
                <SelectAccountBody {...this.props}/>
            </div>
        )
    }
}