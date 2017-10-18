import React, { Component } from 'react'
import AccountFromToBlock from './AccountFromToBlock'
import SelectAccountList from './SelectAccounts'
import Utils from '../js/utils'

class AccountFromToSelectBlock extends Component {
    constructor(props) {
        super(props)
        // this.cctObj = Utils.initialValueForAccounts(this.props.accountList)
        this.state = {
            filterClose: true,
            // accountFrom: this.cctObj.accountFrom,
            // accountTo: this.cctObj.accountTo,
        }
        this.handleFilterToggle = this.handleFilterToggle.bind(this)
        this.selectAccount = this.selectAccount.bind(this)
    }

    handleFilterToggle(initiator) {
        console.log('filterClose')
        this.setState({
            filterClose: !this.state.filterClose,
            initiator: initiator
        })
    }
    
    selectAccount(e) {
        const ttt = Utils.findAcctObject(this.props.accountList, e.target.closest('li').getAttribute('data-acct'))
        if (this.state.initiator) {
            this.setState({
                acctFrom: ttt
            })
        } else {
            this.setState({
                acctTo: ttt
            })
        }
        this.handleFilterToggle()
    }

    render() {
        console.log(this.state)
        const acctObj = Utils.initialValueForAccounts(this.props.accountList)
        return (
            <div>
                <AccountFromToBlock account={this.state.acctFrom || acctObj.accountFrom} title="Списать со счета" handleFilterToggle={this.handleFilterToggle} initiator={true} />
                <AccountFromToBlock account={this.state.acctTo || acctObj.accountTo} title="Зачислить на счет" handleFilterToggle={this.handleFilterToggle} initiator={false} />
                <SelectAccountList accountList={this.props.accountList} filterClose={(this.state.filterClose) ? 'goDown100' : '_'} handleFilterToggle={this.handleFilterToggle} selectAccount={this.selectAccount} />
            </div>
        )
    }
}

export default AccountFromToSelectBlock