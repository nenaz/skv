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
                        return (
                            <li data-acct={item.id} action="acct-select" key={key}>
                                {utils.account2format(item.id, ' ')}
                                <span className="WL">USD</span>
                                <span className="sbFilterOrgAmount">328 363<small className="USD"> 64 </small></span>
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