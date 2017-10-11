import React from 'react'
import styles from '../css/TableRatesBlock.css'
import LineRatesHeaderBlock from './LineRatesHeaderBlock'

const TableRatesBlock = (rates) => {
    console.log(rates)
    if (rates.rates[1]) {
        console.log(rates.rates[1])
        console.log(rates.rates[1]['0']['a'])
    }
    const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
    const arrLine1 = [{
            str:'Доллар',
            spanClassName: 'ccCurImg currencyImg usd icon-usd'
        }, {
            str: (rates.rates[1]) ? rates.rates[1]['0']['a'] : '',
            liClassName: 'bgc-rgba usd sell',
        }, {
            str: (rates.rates[1]) ? rates.rates[1]['0']['b'] : '',
            liClassName: 'bgc-rgba usd buy'
        }]
    const arrLine2 = [{
            str:'Евро',
            spanClassName: 'ccCurImg currencyImg eur icon-eur'
        }, {
            str: (rates.rates[1]) ? rates.rates[1]['1']['a'] : '',
            liClassName: 'bgc-rgba eur sell',
        }, {
            str: (rates.rates[1]) ? rates.rates[1]['1']['b'] : '',
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