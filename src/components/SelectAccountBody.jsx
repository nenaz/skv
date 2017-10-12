import React from 'react'
import utils from '../js/utils'

const SelectAccountBody = (props) => {
    if (props.accontsList) {
        return (
            <ul className="sbFilterOrg" id="ccAccountsCompaniesSelect">
                {props.accontsList.map((item, key) => {
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