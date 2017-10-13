import React from 'react'
import styles from '../css/SelectAccountList.css'

const SelectAccountHeader = (props) => {
    return (
        <div className={styles.ccFilterNew}>
            <div className={styles.ccFilterNewTitle}>
                <div className={styles.ccHeaderTitleBlock}>
                    <span className={styles.ccCancelBtn} action="close-filter">Отменить</span>
                    <span className={styles.ccFilterHeaderTitle}>Со счета</span>
                </div>
            </div>
            <div className={styles.ccFilterAccountTitle}>
                <span>ЗАО "Пропан-трейдинг"</span>
            </div>
        </div>
    )
}

export default SelectAccountHeader