import React from 'react'
import utils from '../js/utils'
import styles from '../css/SelectAccountList.css'

const SelectAccountBody = (props) => {
    if (props.accountList) {
        return (
            <ul className={styles.sbFilterOrg} id="ccAccountsCompaniesSelect">
                {props.accountList.map((item, key) => {
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

export default SelectAccountBody