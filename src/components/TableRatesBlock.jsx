import React from 'react'
import styles from '../css/TableRatesBlock.css'

const TableRatesBlock = (props) => {
    return (
        <div id={styles["currency-rates-table"]}>
            <ul className={[styles.columns, styles["_3"], styles.header]}>
                <li>Курсы валют*</li>
                <li>Купить</li>
                <li>Продать</li>
            </ul>
            <ul className={[styles.columns, styles['_3'], styles['usd-group']]}>
                <li><span className="ccCurImg currencyImg usd icon-usd">Доллар</span></li>
                <li curr="usd" typerate="sell" className="bgc-rgba usd-sell ">59,490</li>
                <li curr="usd" typerate="buy" className="bgc-rgba usd-buy ">56,212</li>
            </ul>
            <ul className={[styles.columns, styles['_3'], styles['eur-group']]}>
                <li><span className="ccCurImg currencyImg eur icon-eur">Евро</span></li>
                <li curr="eur" typerate="sell" className="bgc-rgba eur-sell ">58,702</li>
                <li curr="eur" typerate="buy" className="bgc-rgba eur-buy ">57,303</li>
            </ul>
        </div>
    )
}

export default TableRatesBlock;