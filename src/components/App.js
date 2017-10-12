import React, { Component } from 'react';
import AccountFromBlock from './AccountFromBlock'
import AccountToBlock from './AccountToBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectCurrencyBlock'
import CustomInput from './CustomInput'
import CustomInfoBlock from './CustomInfoBlock'
import CustomButton from './CustomButton'
import SelectAccountList from './SelectAccountList'

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
    };
  }

  componentWillMount() {
    console.log('componentWillMount app')
    this.ws = new WebSocket('ws://10.255.14.131:8099', 'echo-protocol')
    // this.ws.onmessage = e => this.setState({ rates: Object.values(JSON.parse(e.data)) })
    // this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
    
  }

  componentDidMount() {
    console.log('componentDidMount App')
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    // console.log('render app')
    return (
      <div>
        <TableRatesBlock ws={this.ws}/>
        <AccountFromBlock />
        <AccountToBlock />
        <SelectCurrencyBlock />
        <CustomInput />
        <CustomInfoBlock />
        <CustomButton />
        <SelectAccountList ws={this.ws}/>
        <input type="button" value="GetRate" onClick={this.handleClickGetRate}/>
      </div>
    );
  }
}

export default App;
