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

    render(){
        console.log('render')
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
                    <span className={styles["description2-text1"]}>На счёт будет зачислено</span> 
                    <span className={styles["description2-text2"]}>1<span className={`${styles["ccA2F"]} ${styles["USD"]}`}>,47 </span></span>
                </p>
            </div>
        )
    }
}

export default connect(state => ({
    oneRate: state.changeOneRate,
    accountFrom: state.changeAccountFrom,
    accountTo: state.changeAccountTo
}))(OneRateIndex)