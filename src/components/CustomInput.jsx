import React from 'react'
import styles from '../css/CustomInput.css'

const CustomInput = (props) => {
    return (
        <div className={styles["ccCustom-input"]}>
            <div className={styles["ccStandalone-input"]}>
                <input id="ccWidget-vendor-search" value="" type="tel" pattern="[0-9]*" placeholder="Введите сумму зачисления" />
            </div>
            <span className={styles.currencyImg}>
                <span className="ccA2F USD"></span>
            </span>
        </div>
    )
}

export default CustomInput