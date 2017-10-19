import React from 'react'
import styles from './css/CustomInfoBlock.css'
import {connect} from 'react-redux'

const CustomInfoBlock = (props) => {
    const rateObj = (props.rates).filter(item => item.sym === 'USD/RUB')
    const rate = (true) ? rateObj[0].a : rateObj[0].b
    const summ = props.inputValue * rate
    console.log(rateObj)
    return (
        <div className={styles.skvDescText}>
            <div className="SkvDescriptionLin1">На счёт будет зачислено {summ}</div>
            <div className="SkvDescriptionLin2"> по курсу  {rate}  за 1  <span className="ccA2F USD"></span>*</div>
        </div>
    )
}

export default connect(state => ({
    selectedButton: state.selectedButton,
    inputValue: state.inputValue,
}))(CustomInfoBlock)