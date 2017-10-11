import React, { Component } from 'react';
import AccountFromBlock from './AccountFromBlock'
import AccountToBlock from './AccountToBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectCurrencyBlock'
import CustomInput from './CustomInput'
import CustomInfoBlock from './CustomInfoBlock'
import CustomButton from './CustomButton'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 90,
      users: [],
      error: null,
      rates: {}
    };
    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  handleClickGetRate() {
    console.log('handleClickGetRate')
    var testClientId = "2041234";
    var arr = [];
    var obj = {
        client: testClientId,
        sym: 'USD/RUB',
        // s: 10000,
        s: 10000,
        cur: 'RUB'
    };
    arr[0] = 'GetRate';
    arr[1] = obj;
    this.ws.send(JSON.stringify(arr));
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.ws = new WebSocket('ws://10.255.14.131:8099', 'echo-protocol')
    this.ws.onmessage = e => this.setState({ rates: Object.values(JSON.parse(e.data)) })
    this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
    // this.handleClickGetRate();
  }

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    return (
      <div>
        <TableRatesBlock {...this.state}/>
        <AccountFromBlock />
        <AccountToBlock />
        <SelectCurrencyBlock />
        <CustomInput />
        <CustomInfoBlock />
        <CustomButton />
        <input type="button" value="GetRate" onClick={this.handleClickGetRate}/>
      </div>
    );
  }
}

export default App;
