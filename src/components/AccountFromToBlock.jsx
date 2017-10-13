import React from 'react'
import HeadTitle from './HeadTitle'
import AccountBlock from './AccountBlock'

const AccountFromBlock = (props) => {
    return (
        <div>
            <HeadTitle title={props.title}/>
            <AccountBlock account={props.account}/>
        </div>
    )
}

export default AccountFromBlock;