import React, { Component } from 'react';
import AccountFromBlock from './AccountFromBlock'
import AccountToBlock from './AccountToBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectCurrencyBlock'
import CustomInput from './CustomInput'
import CustomInfoBlock from './CustomInfoBlock'
import CustomButton from './CustomButton'

class App extends Component {
  render() {
    return (
      <div>
        <TableRatesBlock />
        <AccountFromBlock />
        <AccountToBlock />
        <SelectCurrencyBlock />
        <CustomInput />
        <CustomInfoBlock />
        <CustomButton />
      </div>
    );
  }
}

export default App;
