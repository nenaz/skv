import React, { Component } from 'react'
import AccountFromToBlock from './AccountFromToBlock'
import SelectAccountList from './SelectAccounts/SelectAccountList'
import Utils from '../js/utils'

class AccountFromToSelectBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterClose: true
        }
        this.handleFilterToggle = this.handleFilterToggle.bind(this)
    }

    handleFilterToggle() {
        console.log('filterClose')
        this.setState({
            filterClose: !this.state.filterClose
        })
    }

    render() {
        let acctObj = Utils.initialValueForAccounts(this.props.accountList)
        // let name = (this.state.filterClose) ? '' : 'goDown100'
        return (
            <div>
                <AccountFromToBlock account={acctObj.accountFrom} title="Списать со счета" handleFilterToggle={this.handleFilterToggle} />
                <AccountFromToBlock account={acctObj.accountTo} title="Зачислить на счет" handleFilterToggle={this.handleFilterToggle} />
                <SelectAccountList accountList={this.props.accountList} filterClose={(this.state.filterClose) ? 'goDown100' : '_'} handleFilterToggle={this.handleFilterToggle} />
            </div>
        )
    }
}

export default AccountFromToSelectBlock