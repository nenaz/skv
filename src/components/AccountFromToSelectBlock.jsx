import React, { Component } from 'react'
import AccountFromToBlock from './AccountFromToBlock'
import SelectAccountList from './SelectAccounts'
import Utils from '../js/utils'
import {connect} from 'react-redux'
import {changeAccountFrom, changeAccountTo} from '../AC'

class AccountFromToSelectBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterClose: true,
        }
        this.handleFilterToggle = this.handleFilterToggle.bind(this)
        this.selectAccount = this.selectAccount.bind(this)
    }

    handleFilterToggle(initiator) {
        this.setState({
            filterClose: !this.state.filterClose,
            initiator: initiator
        })
    }
    
    selectAccount(e) {
        const actualAcctObject = Utils.findAcctObject(this.props.accountList, e.target.closest('li').getAttribute('data-acct'))
        if (this.state.initiator) {
            this.props.changeAccountFrom(actualAcctObject);
        } else {
            this.props.changeAccountTo(actualAcctObject)
        }
        this.handleFilterToggle()
    }

    render() {
        console.log('render accounts block')
        const acctObj = Utils.initialValueForAccounts(this.props.accountList)
        return (
            <div>
                <AccountFromToBlock account={this.props.accountFrom || acctObj.accountFrom} title="Списать со счета" handleFilterToggle={this.handleFilterToggle} initiator={true} />
                <AccountFromToBlock account={this.props.accountTo || acctObj.accountTo} title="Зачислить на счет" handleFilterToggle={this.handleFilterToggle} initiator={false} />
                <SelectAccountList accountList={this.props.accountList} filterClose={(this.state.filterClose) ? 'goDown100' : '_'} handleFilterToggle={this.handleFilterToggle} selectAccount={this.selectAccount} />
            </div>
        )
    }
}

export default connect(state => ({
    accountFrom: state.changeAccountFrom,
    accountTo: state.changeAccountTo
}), {changeAccountFrom, changeAccountTo})(AccountFromToSelectBlock)