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

        // this.startGetRatesFromServer = this.startGetRatesFromServer.bind(this)
        // this.handleClickGetRate = this.handleClickGetRate.bind(this)
        // this.wsOnMessageEvent = this.wsOnMessageEvent.bind(this)
        // this.props.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    }

    // startGetRatesFromServer() {
    //     const me = this;
    //     me.intervel = setInterval(() => {
    //         me.handleClickGetRate('GetRate');
    //     }, 5000)
    //     me.timer = setTimeout(() => {
    //         me.handleClickGetRate('GetRate')
    //     }, 1000)
    // }

    // handleClickGetRate(str) {
    //     this.props.ws.send(JSON.stringify(Utils.handleClickGetRate('GetRate')));
    // }

    // wsOnMessageEvent(data) {
    //     // switch (data[0]) {
    //     //   case 'GetRate': this.setState({ rates: data[1] })
    //     //     break
    //     //   case 'Accounts': this.setState({ accounts: data[1] })
    //     //     break
    //     //   default: console.log('default')
    //     // }
    //     if (data[0] === 'GetRate') {
    //         this.setState({ rates: data[1] })
    //     }
    // }

    // componentDidMount() {
    //     console.log('componentDidMount TableRatesBlock')
    //     this.startGetRatesFromServer();
    // }
    
    render () {
        console.log(this.props)
        console.log(this.state)
        console.log('render tbr')
        if (this.props.rates) {
            // if (this.props.rates[1]) {
                // console.log(this.state.rates)
                // console.log(this.state.rates['0']['a'])
            // }
            const arrHead = [{str:'Курсы валют*'}, {str:'Купить'}, {str:'Продать'}]
            const arrLine1 = [{
                    str:'Доллар',
                    spanClassName: 'ccCurImg currencyImg usd icon-usd'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['a'] : '',
                    liClassName: 'bgc-rgba usd sell',
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['0']['b'] : '',
                    liClassName: 'bgc-rgba usd buy'
                }]
            const arrLine2 = [{
                    str:'Евро',
                    spanClassName: 'ccCurImg currencyImg eur icon-eur'
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['a'] : '',
                    liClassName: 'bgc-rgba eur sell',
                }, {
                    str: (this.props.rates[1]) ? this.props.rates['1']['b'] : '',
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
}