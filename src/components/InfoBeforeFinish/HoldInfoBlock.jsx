import React, {Component} from 'react'
import styles from './css/HoldInfoBlock.css'

class HoldInfoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className={styles["holdExpectation"]} >
                <div className="dpMainSvgContainer"></div>
                <div className="message-text-apply message-text-apply-1">
                    <span>Мы резервируем нужную сумму</span>
                </div>
                <div className="message-text-apply message-text-apply-2">
                    <span>Это может занять 2-3 минуты</span>
                    <div>Не закрывайте эту страницу</div>
                    <span>После этого Вы сможете осуществить операцию по самому подходящему курсу.</span>
                </div>
            </div>
        )
    }
}

export default HoldInfoBlock