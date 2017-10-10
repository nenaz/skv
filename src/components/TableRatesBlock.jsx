import React from 'react'
import styles from '../css/TableRatesBlock.css'
import LineRatesHeaderBlock from './LineRatesHeaderBlock'

const TableRatesBlock = (props) => {
    const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
    const arrLine1 = [{
            str:'Доллар',
            spanClassName: 'ccCurImg currencyImg usd icon-usd'
        }, {
            str:'',
            liClassName: 'bgc-rgba usd sell',
        }, {
            str:'',
            liClassName: 'bgc-rgba usd buy'
        }]
    const arrLine2 = [{
            str:'Евро',
            spanClassName: 'ccCurImg currencyImg eur icon-eur'
        }, {
            str:'',
            liClassName: 'bgc-rgba eur sell',
        }, {
            str:'',
            liClassName: 'bgc-rgba eur buy'
        }]
    return (
        <div id={styles["currency-rates-table"]}>
            <LineRatesHeaderBlock nameClass="header" dataArr={arrHead}/>
            <LineRatesHeaderBlock nameClass="usd-group" dataArr={arrLine1}/>
            <LineRatesHeaderBlock nameClass="eur-group" dataArr={arrLine2}/>
        </div>
    )
}

export default TableRatesBlock;