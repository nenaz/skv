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
      // accontsList: {},
      connection: false,
      val: ''
    }

    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  componentWillMount() {
    // console.log('componentWillMount app')
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
    // setTimeout(() => {
      
    // }, 3000)
  }

  wsOnMessageEvent(data) {
    console.log('data[0] = '+data[0])
      switch (data[0]) {
        case 'GetRate': this.setState({ rates: data[1] })
          break
        case 'Accounts': this.setState({ accontsList: data[1].accounts })
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
        <div>{this.state.val}</div>
      </div>
    );
  }
}

export default App;
