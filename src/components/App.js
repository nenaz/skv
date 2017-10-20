import React, { Component } from 'react';
import AccountFromToSelectBlock from './AccountFromToSelectBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectedCurrencyButtonsBlock'
import CustomBlock from './CustomBlock'
import Utils from '../js/utils'
import styles from '../css/App.css'
import OneRate from './OneRate'
import InfoBeforeFinish from './InfoBeforeFinish'
import {connect} from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      connection: false,
      page: 1
    }

    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  componentWillMount() {
    // this.ws = new WebSocket('ws://10.255.14.131:8099', 'echo-protocol')
    this.ws = new WebSocket('ws://localhost:8099', 'echo-protocol')
    this.ws.onopen = e => this.getStartDataFromServer()
    this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }

  getStartDataFromServer() {
    const me = this
    me.handleClickGetRate('GetAccounts', {client: '2041111'})
    me.handleClickGetRate('GetRate')
  }

  wsOnMessageEvent(data) {
      switch (data[0]) {
        case 'GetRate': this.setState({ rates: data[1] })
          break
        case 'Accounts': this.setState({ accountList: data[1].accounts })
          break
        default: console.log('default')
      }
  }

  handleClickGetRate(str, obj = {}) {
      this.ws.send(JSON.stringify(Utils.handleClickGetRate(str, obj)));
  }

  componentDidMount() {
    const me = this
    me.intervalId = setInterval(() => {
      me.handleClickGetRate('GetRate')
    }, 5000)
  }

  componentWillUnmount() {
    this.ws.close()
    clearInterval(this.intervalId)
  }

  render() {
    if (this.state.accountList && this.state.rates) {
      return (
        <div className={styles.appElem}>
          <div className={styles.page1}>
            <TableRatesBlock rates={this.state.rates}/>
            <AccountFromToSelectBlock accountList={this.state.accountList}/>
            <SelectCurrencyBlock />
            <CustomBlock rates={this.state.rates}/>
          </div>
          <div className={styles.page2}>
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
  changePage: state.changePage
}))(App)