import React, { Component } from 'react'
import utils from '../js/utils'

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
        // console.log(this.state)
        return (
            <div className="dpSidebar dpToggledBlock ccAccountAnimationIn">
                    <div className="sbFilterBody ccFilterNew">
                    <div className="ccFilterNewTitle">
                        <div className="ccHeaderTitleBlock">
                            <span className="ccCancelBtn" action="close-filter">Отменить</span>
                            <span className="ccFilterHeaderTitle">Со счета</span>
                        </div>
                    </div>
                    <div className="sbFilterSubHeader sbFilterSubHeaderTop ccFilterAccountTitle">
                        <span>ЗАО "Пропан-трейдинг"</span>
                    </div>
                    <ul className="sbFilterOrg" id="ccAccountsCompaniesSelect">
                        {/* {this.state.accontsList.map((item, key) => {
                            return (
                                <li data-acct={item.id} action="acct-select" key={key}>
                                    {utils.account2format(item.id, ' ')}
                                    <span className="WL">USD</span>
                                    <span className="sbFilterOrgAmount">328 363<small className="USD"> 64 </small></span>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>
            </div>
        )
    }
}
