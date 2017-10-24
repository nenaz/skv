import React from 'react'
import styles from './css/CustomInfoBlock.css'
import {connect} from 'react-redux'
import {strValues} from '../../js/consts'

const CustomInfoBlock = (props) => {
    const rateObj = (props.rates).filter(item => item.sym === 'USD/RUB')
    const rate = (true) ? rateObj[0].a : rateObj[0].b
    const summ = (props.selectedButton) ? props.inputValue * rate : props.inputValue / rate
    return (
        <div className={styles.skvDescText}>
            <div className="SkvDescriptionLin1">{(props.selectedButton) ? strValues.fromAccountText : strValues.toAccountText} {summ}</div>
            <div className="SkvDescriptionLin2"> по курсу  {rate}  за 1  <span className="ccA2F USD"></span>*</div>
        </div>
    )
}

export default connect(state => ({
    selectedButton: state.selectedButton,
    inputValue: state.inputValue,
    rates: state.rates
}))(CustomInfoBlock)