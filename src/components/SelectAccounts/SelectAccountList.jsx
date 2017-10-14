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
        console.log('render list')
        return (
            <div className={`${styles.ccSelectAccountList} ${styles.goDown100}`}>
                <SelectAccountHeader />
                <SelectAccountBody {...this.props}/>
            </div>
        )
    }
}
