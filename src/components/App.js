import React, { Component } from 'react';
import AccountFromToSelectBlock from './AccountFromToSelectBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectedCurrencyButtonsBlock'
import CustomBlock from './CustomBlock'
// import Utils from '../js/utils'
import styles from '../css/App.css'
import OneRate from './OneRate'
import InfoBeforeFinish from './InfoBeforeFinish'
import {connect} from 'react-redux'
import {changeRates} from '../AC'
import Socket from '../js/socket'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      connection: false
    }

    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  componentWillMount() {
    const me = this;
    this.ws = new Socket()
    this.ws.connect('ws://10.255.14.131:8099', 'echo-protocol').then((connection) => {
      console.log('result')
      this.ws.connection = connection
      me.ws.newData = (e) => me.wsOnMessageEvent(JSON.parse(e.data))
      me.getStartDataFromServer();
      
    }, (error) => {
      console.log('error')
    })

    // this.ws = new WebSocket('ws://localhost:8099', 'echo-protocol')
    // this.ws.onopen = e => this.getStartDataFromServer()
    // this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    // this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    // this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }

  getStartDataFromServer() {
    const me = this
    me.handleClickGetRate('GetAccounts', {client: '2041111'})
    me.handleClickGetRate('GetRate')
  }

  wsOnMessageEvent(data) {
    console.log(this.props)
      switch (data[0]) {
        case 'GetRate': this.props.changeRates(data[1])
          break
        case 'Accounts': this.setState({ accountList: data[1].accounts })
          break
        default: console.log('default')
      }
  }

  handleClickGetRate(str, obj = {}) {
      this.ws.sendMessage(str, obj);
  }

  componentDidMount() {
      // const me = this
      // me.intervalId = setInterval(() => {
        // me.handleClickGetRate.bind('GetRate')
      // }, 5000)
      // this.handleClickGetRate('GetRate')
  }

  componentWillUnmount() {
    this.ws.close()
    clearInterval(this.intervalId)
  }

  render() {
    if (this.state.accountList && this.props.rates.length) {
      return (
        <div className={styles.appElem}>
          <div className={`${styles.page1} ${styles[(this.props.changePage !== 1) ? "active-no" : ""]}`}>
            <TableRatesBlock rates={this.props.rates}/>
            <AccountFromToSelectBlock accountList={this.state.accountList}/>
            <SelectCurrencyBlock />
            <CustomBlock rates={this.props.rates}/>
          </div>
          <div className={`${styles.page2} ${styles[(this.props.changePage !== 2) ? "active-no" : ""]}`}>
            <OneRate />
            <InfoBeforeFinish />
          </div>
        </div>
      )
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default connect(state => ({
  changePage: state.changePage,
  rates: state.rates,
  accountList: state.accountList
}),{changeRates})(App)