import React, { Component } from 'react'
// import Utils from '../js/utils'

export default class SelectAccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
        console.log('render list')
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
                    {/* <ul className="sbFilterOrg" id="ccAccountsCompaniesSelect">
                        {this.props.accontsList.map((item, key) => {
                            return (
                                <li data-acct={item.acctno} action="acct-select" key={key}>
                                    {Utils.account2format(item.acctno, ' ')}
                                    <span className="WL">USD</span>
                                    <span className="sbFilterOrgAmount">328 363<small className="USD"> 64 </small></span>
                                </li>
                            )
                        })}
                    </ul> */}
                </div>
            </div>
        )
    }
}
