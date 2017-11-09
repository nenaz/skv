import React, {Component} from 'react'
import AccountFromToSelectBlock from './AccountFromToSelectBlock'
import TableRatesBlock from './TableRatesBlock'
import SelectCurrencyBlock from './SelectedCurrencyButtonsBlock'
import CustomBlock from './CustomBlock'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'


class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
            // <div className={`${styles.page1} ${styles[(this.props.changePage !== 1) ? "left100" : ""]}`}>
            <div className={`${styles.page1} `}>
              <PageTitle title="Конверсия онлайн" />
              <TableRatesBlock rates={this.props.rates}/>
              <AccountFromToSelectBlock />
              <SelectCurrencyBlock />
              <CustomBlock rates={this.props.rates}/>
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
  rates: state.rates
}))(Page1)