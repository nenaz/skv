import React, { Component } from 'react';
import styles from '../css/AccountBlock.css'
import Utils from '../js/utils'

export default class AccountBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let currency = +(this.props.account.id).substr(5, 3)
        let amount = {__html: Utils.currencyHTML(this.props.account.sum, currency)}
        let account = {__html: Utils.account2format(this.props.account.id)}
        return (
            <div className={styles.dpNoNameOrganisation}>
                <div className={styles.dpSidebarAccountSumm} dangerouslySetInnerHTML={amount}></div>
                <span className={styles.dpSidebarAccountNumber} dangerouslySetInnerHTML={account}></span>
                <i className="icon-arrow-right"></i>
            </div>
        )
    }
}