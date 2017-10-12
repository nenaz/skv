import React from 'react'
import styles from '../css/TableRatesBlock.css'
import LineRatesHeaderBlock from './LineRatesHeaderBlock'

const TableRatesBlock = (props) => {
    console.log(props)
    // console.log(state)
    console.log('render tbr')
    if (props.rates) {
        if (props.rates[1]) {
            console.log(props.rates)
            console.log(props.rates['0']['a'])
        }
        const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
        const arrLine1 = [{
                str:'Доллар',
                spanClassName: 'ccCurImg currencyImg usd icon-usd'
            }, {
                str: (props.rates[1]) ? props.rates['0']['a'] : '',
                liClassName: 'bgc-rgba usd sell',
            }, {
                str: (props.rates[1]) ? props.rates['0']['b'] : '',
                liClassName: 'bgc-rgba usd buy'
            }]
        const arrLine2 = [{
                str:'Евро',
                spanClassName: 'ccCurImg currencyImg eur icon-eur'
            }, {
                str: (props.rates[1]) ? props.rates['1']['a'] : '',
                liClassName: 'bgc-rgba eur sell',
            }, {
                str: (props.rates[1]) ? props.rates['1']['b'] : '',
                liClassName: 'bgc-rgba eur buy'
            }]
        return (
            <div id={styles["currency-rates-table"]}>
                <LineRatesHeaderBlock nameClass="header" dataArr={arrHead}/>
                <LineRatesHeaderBlock nameClass="usd-group" dataArr={arrLine1}/>
                <LineRatesHeaderBlock nameClass="eur-group" dataArr={arrLine2}/>
            </div>
        )
    } else {
        return <div id={styles["currency-rates-table"]} />
    }
}

export default TableRatesBlock