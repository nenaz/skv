import React from 'react'
import HeadTitle from '../HeadTitle'
import styles from '../../css/SelectCurrencyBlock.css'

const SelectCurrencyBlock = (props) => {
    return (
        <div>
            <HeadTitle title="Валюта и сумма операции" />
            <div className={styles.dpTabButtons}>
                <div className={`${styles.button} ${styles.selected} ${styles.left}`} data-curr="rub" >Рубли</div>
                <div className={`${styles.button} ${styles.right}`} data-curr="usd">Доллары</div>
            </div>
        </div>
    )
}

export default SelectCurrencyBlock