import React, { Component } from 'react'
import HeadTitle from '../HeadTitle'
import styles from './css/SelectCurrencyBlock.css'
import SelectCurrencyButton from './SelectCurrencyButton'
import {connect} from 'react-redux'
import {selectTransactionCurrency} from '../../AC'

class SelectCurrencyBlock extends Component {
    constructor(props) {
        super(props)

        this.selectCurencyButton = this.selectCurencyButton.bind(this)
    }

    selectCurencyButton() {
        this.props.selectTransactionCurrency()
    }

    render() {
        return (
            <div className={styles['parrentBlock']}>
                <HeadTitle title="Валюта и сумма операции" />
                <div className={styles.dpTabButtons}>
                    <SelectCurrencyButton type="left" selected={(this.props.selectedButton) ? '' : 'selected'} curr="rub" selectCurencyButton={this.selectCurencyButton} currStr="Рубли" />
                    <SelectCurrencyButton type="right" selected={(this.props.selectedButton) ? 'selected' : ''} curr="usd" selectCurencyButton={this.selectCurencyButton} currStr="Доллары"/>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    selectedButton: state.selectedButton
}),{selectTransactionCurrency})(SelectCurrencyBlock)