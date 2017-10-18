import React, { Component } from 'react'
import HeadTitle from '../HeadTitle'
import styles from './css/SelectCurrencyBlock.css'
import SelectCurrencyButton from './SelectCurrencyButton'

export default class SelectCurrencyBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeButton: false
        }

        this.selectCurencyButton = this.selectCurencyButton.bind(this)
    }

    selectCurencyButton() {
        this.setState({
            activeButton: !this.state.activeButton
        });
    }

    render() {
        return (
            <div className={styles['parrentBlock']}>
                <HeadTitle title="Валюта и сумма операции" />
                <div className={styles.dpTabButtons}>
                    <SelectCurrencyButton type="left" selected={(this.state.activeButton) ? '' : 'selected'} curr="rub" selectCurencyButton={this.selectCurencyButton} currStr="Рубли" />
                    <SelectCurrencyButton type="right" selected={(this.state.activeButton) ? 'selected' : ''} curr="usd" selectCurencyButton={this.selectCurencyButton} currStr="Доллары"/>
                </div>
            </div>
        )
    }
}