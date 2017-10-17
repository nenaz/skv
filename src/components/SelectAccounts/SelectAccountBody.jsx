import React, { Component } from 'react'
import utils from '../../js/utils'
import styles from '../../css/SelectAccountList.css'

export default class SelectAccountBody extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        if (this.props.accountList) {
            return (
                <ul className={styles.sbFilterOrg} id="ccAccountsCompaniesSelect">
                    {this.props.accountList.map((item, key) => {
                        let currency = +(item.id).substr(5, 3)
                        let amount = {__html: utils.currencyHTML(item.sum, currency)}            
                        return (
                            <li data-acct={item.id} action="acct-select" key={key} onClick={this.props.selectAccount}>
                                {utils.account2format(item.id, ' ')}
                                <span className="WL">USD</span>
                                <span className="sbFilterOrgAmount" dangerouslySetInnerHTML={amount}></span>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return <div>No Rate</div>
        }
    }
}