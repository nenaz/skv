import React, { Component } from 'react'
import styles from '../css/TableRatesBlock.css'
import LineRatesHeaderBlock from './LineRatesHeaderBlock'
// import Utils from '../js/utils'

export default class TableRatesBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // rates: {}
        }
    }

    render () {
        if (this.props.rates) {
            const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
            const arrLine1 = [{
                    str:'Доллар',
                    spanClassName: 'ccCurImg currencyImg usd icon-usd'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['a'] : '',
                    classType: 'sell',
                    classGroup: '_3',
                    classGroupColor: 'bgc-rgba'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['b'] : '',
                    classType: 'buy',
                    classGroup: '_3',
                    classGroupColor: 'bgc-rgba'
                }]
            const arrLine2 = [{
                    str:'Евро',
                    spanClassName: 'ccCurImg currencyImg eur icon-eur'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['a'] : '',
                    classType: 'sell',
                    classGroup: '_3',
                    classGroupColor: 'bgc-rgba'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['b'] : '',
                    classType: 'buy',
                    classGroup: '_3',
                    classGroupColor: 'bgc-rgba'
                }]
            return (
                <div id={styles["currency-rates-table"]}>
                    <LineRatesHeaderBlock nameClass="header" dataArr={arrHead} />
                    <LineRatesHeaderBlock nameClass="usd-group" dataArr={arrLine1} />
                    <LineRatesHeaderBlock nameClass="eur-group" dataArr={arrLine2} />
                </div>
            )
        } else {
            return <div id={styles["currency-rates-table"]} />
        }
    }
}