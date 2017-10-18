import React, { Component } from 'react'
import SelectAccountHeader from './SelectAccountHeader'
import SelectAccountBody from './SelectAccountBody'
import styles from './css/SelectAccountList.css'

export default class SelectAccountList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    
    render() {
        console.log('this.props.filterClose = '+this.props.filterClose)
        return (
            <div className={`${styles.ccSelectAccountList} ${styles[this.props.filterClose]}`}>
                <SelectAccountHeader handleFilterToggle={this.props.handleFilterToggle}/>
                <SelectAccountBody accountList={this.props.accountList} selectAccount={this.props.selectAccount} initiator={this.props.initiator} />
            </div>
        )
    }
}
