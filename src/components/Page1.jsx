import React, {Component} from 'react'
import AccountFromToSelectBlock from './AccountFromToSelectBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectedCurrencyButtonsBlock'
import CustomBlock from './CustomBlock'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import { toggleLoader } from '../AC'


class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick(e) {
        const ddd = new Date()
        this.props.toggleLoader()
        this.props.wsConnect.sendMessage('Hold', {
            requestId: ddd.getTime(),
            id: this.props.accountFrom.id,
            hold: this.props.inputValue * 1
        })
    }
    
    componentWillMount() {
        // console.log(' page 1 componentWiiMount')
    }

    componentDidMount() {
        // console.log(' page 1 componentDidMount')
    }

    componentWillUnmount() {
        // console.log('page 1 componentWillUnmount')
    }

    render() {
        console.log('page 1 render')
        return (
            <div className={`${styles.page1} `}>
              <PageTitle title="Конверсия онлайн" />
              <TableRatesBlock rates={this.props.rates}/>
              <AccountFromToSelectBlock />
              <SelectCurrencyBlock />
              <CustomBlock rates={this.props.rates} handleButtonClick={this.handleButtonClick}/>
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
  rates: state.rates,
  accountFrom: state.changeAccountFrom,
  inputValue: state.inputValue,
  wsConnect: state.wsConnect
}), { toggleLoader })(Page1)