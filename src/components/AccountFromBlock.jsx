import React from 'react'
import HeadTitle from './HeadTitle'
import AccountBlock from './AccountBlock'

const AccountFromBlock = (props) => {
    return (
        <div>
            <HeadTitle title="Списать со счета"/>
            <AccountBlock />
        </div>
    )
}

export default AccountFromBlock;