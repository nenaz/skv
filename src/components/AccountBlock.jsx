import React, { Component } from 'react';
import styles from '../css/AccountBlock.css'

export default class AccountBlock extends Component {
    render() {
        return (
            <div className={styles.dpNoNameOrganisation}>
                <div className={styles.dpSidebarAccountSumm}>100 345 345<small > 09 </small></div>
                <span className={styles.dpSidebarAccountNumber}>40807 810 9 0000 0000159</span>
                <i className="icon-arrow-right"></i>
            </div>
        )
    }
}