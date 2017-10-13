import React from 'react'
import AccountFromToBlock from './AccountFromToBlock'
// import AccountToBlock from './AccountToBlock'
import Utils from '../js/utils'

const AccountFromToSelectBlock = (props) => {
    let acctObj = Utils.initialValueForAccounts(props.accountList)
    return (
        <div>
            <AccountFromToBlock account={acctObj.accountFrom} title="Списать со счета"/>
            <AccountFromToBlock account={acctObj.accountTo} title="Зачислить на счет"/>
        </div>
    )
}

export default AccountFromToSelectBlock