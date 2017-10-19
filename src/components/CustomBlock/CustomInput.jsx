import React, { Component } from 'react'
import styles from './css/CustomInput.css'

export default class CustomInput extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={styles["ccCustom-input"]}>
                <div className={styles["ccStandalone-input"]}>
                    <input id="ccWidget-vendor-search" value={this.props.value} type="tel" pattern="[0-9]*" placeholder="Введите сумму зачисления" onChange={this.props.inputChangeHandler}/>
                </div>
                <span className={styles.currencyImg}>
                    <span className="ccA2F USD"></span>
                </span>
            </div>
        )
    }
}