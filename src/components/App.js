import React, { Component } from 'react';
import logo from '../img/logo.svg';
import styles from './App.css';
// import LineRate from './LineRate'
// import AccountFromBlock from './AccountFromBlock'
// import AccountToBlock from './AccountToBlock'
// import TableRatesBlock from './TableRatesBlock'
// import SelectCurrencyBlock from './SelectCurrencyBlock'
// import CustomInput from './CustomInput'
// import CustomInfoBlock from './CustomInfoBlock'
// import CustomButton from './CustomButton'

class App extends Component {
  render() {
    return (
      // <LineRate />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
      // <div>
      //   <TableRatesBlock />
      //   <AccountFromBlock />
      //   <AccountToBlock />
      //   <SelectCurrencyBlock />
      //   <CustomInput />
      //   <CustomInfoBlock />
      //   <CustomButton />
      // </div>
    );
  }
}

export default App;
