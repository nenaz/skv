import React, { Component } from 'react';
import AccountFromToSelectBlock from './AccountFromToSelectBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectedCurrencyButtonsBlock'
import CustomBlock from './CustomBlock'
import Utils from '../js/utils'
import styles from '../css/App.css'
import store from '../store'
import Counter from './Counter'
import {Provider} from 'react-redux'

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
    console.log('data[0] = '+data[0])
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
    console.log('render app')
    if (this.state.accountList && this.state.rates) {
      return (
        <Provider store={store}>
          <div className={styles.appElem}>
            <TableRatesBlock {...this.state}/>
            <AccountFromToSelectBlock accountList={this.state.accountList}/>
            <SelectCurrencyBlock />
            <CustomBlock />
            <Counter />
          </div>
        </Provider>
      )
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default App