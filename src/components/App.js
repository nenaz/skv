import React, { Component } from 'react';
import AccountFromBlock from './AccountFromBlock'
import AccountToBlock from './AccountToBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectCurrencyBlock'
import CustomInput from './CustomInput'
import CustomInfoBlock from './CustomInfoBlock'
import CustomButton from './CustomButton'
import SelectAccountList from './SelectAccountList'
import Utils from '../js/utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90,
      users: [],
      error: null,
      rates: {},
      accounts: {},
      connection: false
    }

    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  componentWillMount() {
    // console.log('componentWillMount app')
    this.ws = new WebSocket('ws://10.255.14.131:8099', 'echo-protocol')
    this.ws.onopen = e => this.getStartDataFromServer()
    this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }

  getStartDataFromServer() {
    this.handleClickGetRate('GetRate')
    this.handleClickGetRate('GetAccounts', {client: '2041111'})
  }

  wsOnMessageEvent(data) {
      switch (data[0]) {
        case 'GetRate': this.setState({ rates: data[1] })
          break
        case 'Accounts': this.setState({ accounts: data[1].accounts })
          break
        default: console.log('default')
      }
  }

  handleClickGetRate(str, obj = {}) {
      this.ws.send(JSON.stringify(Utils.handleClickGetRate(str, obj)));
  }

  componentDidMount() {
    // console.log('componentDidMount App')
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    console.log('render app')
    return (
      <div>
        <TableRatesBlock {...this.state}/>
        <AccountFromBlock />
        <AccountToBlock />
        <SelectCurrencyBlock />
        <CustomInput />
        <CustomInfoBlock />
        <CustomButton />
        <SelectAccountList {...this.state}/>
        <input type="button" value="GetRate" onClick={this.handleClickGetRate}/>
      </div>
    );
  }
}

export default App;
