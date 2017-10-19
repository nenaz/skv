import React, { Component } from 'react'
import styles from '../css/TableRatesBlock.css'
import LineRatesHeaderBlock from './LineRatesHeaderBlock'

class TableRatesBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const tableStrConst = {
            type_sell: 'sell',
            type_buy: 'buy',
            group: '_3',
            groupColor: 'bgc-rgba'
        }
        if (this.props.rates) {
            const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
            const arrLine1 = [{
                    str:'Доллар',
                    spanClassName: 'ccCurImg currencyImg usd icon-usd'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['a'] : '',
                    classType: tableStrConst.type_sell,
                    classGroup: tableStrConst.group,
                    classGroupColor: tableStrConst.groupColor
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['b'] : '',
                    classType: tableStrConst.type_buy,
                    classGroup: tableStrConst.group,
                    classGroupColor: tableStrConst.groupColor
                }]
            const arrLine2 = [{
                    str:'Евро',
                    spanClassName: 'ccCurImg currencyImg eur icon-eur'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['a'] : '',
                    classType: tableStrConst.type_sell,
                    classGroup: tableStrConst.group,
                    classGroupColor: tableStrConst.groupColor
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['b'] : '',
                    classType: tableStrConst.type_buy,
                    classGroup: tableStrConst.group,
                    classGroupColor: tableStrConst.groupColor
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

export default TableRatesBlock