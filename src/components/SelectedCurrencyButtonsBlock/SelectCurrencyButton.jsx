import React from 'react'
import styles from './css/SelectCurrencyButton.css'

const SelectCurencyButton = (props) => {
    return (
        <div className={`${styles.button} ${styles[props.selected]} ${styles[props.type]}`} data-curr={props.curr} onClick={props.selectCurencyButton}>{props.currStr}</div>
    )
}

export default SelectCurencyButton