import React from 'react'
import HeadTitle from './HeadTitle'
import AccountBlock from './AccountBlock'

const AccountToBlock = (props) => {
    return (
        <div>
            <HeadTitle title="Зачислить на счет"/>
            <AccountBlock />
        </div>
    )
}

export default AccountToBlock;