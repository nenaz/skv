import React, {Component} from 'react'
import styles from './css/OneRate.css'
import {connect} from 'react-redux'
import Utils from '../../js/utils'
import Span from '../Span'

class OneRateIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.rate = []
    }

    componentWillUpdate(nextProps) {
        this.rate = Utils.updateRate(this.props.oneRate, nextProps.oneRate, true)
    }

    calcSumm() {
        return (this.props.selectedButton) ? (this.props.inputValue * this.props.oneRate.a).toFixed(2) : (this.props.inputValue / this.props.oneRate.a).toFixed(2)
    }

    render(){
        console.log('render')
        // let amount = Utils.num2format(this.calcSumm())
        let amount = {__html: Utils.amount2Format(this.calcSumm(), 'RUB', ',', true)}
        return(
            <div className={styles["big-title"]}>
                <p className={styles["apply-title"]}>Вы покупаете доллары за рубли</p>
                <div className={styles["apply-rate"]}>
                    <div className={styles["blockUpdateRate"]}>
                        {
                            this.rate.map((item, key) => {
                                return (
                                    <Span key={item.key} listClassName={item.className} currencyName={item.value} />
                                )
                            })
                        }
                    </div>
                    <i className={`${styles["neutral"]} ${styles["ccArrow"]} ${styles["dpIcons"]}`}></i>
                </div>
                <p className={`${styles["apply-description"]} ${styles["description1"]}`}>рублей за 1 доллар</p>
                <p className={`${styles["apply-description"]} ${styles["description2"]}`}>
                    <span className={styles["description2-text1"]}>На счёт будет зачислено </span> 
                    <span className={styles["description2-text2"]} dangerouslySetInnerHTML={amount} />
                </p>
            </div>
        )
    }
}

export default connect(state => ({
    oneRate: state.changeOneRate,
    selectedButton: state.selectedButton,
    inputValue: state.inputValue
}))(OneRateIndex)