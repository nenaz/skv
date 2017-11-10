import React, {Component} from 'react'
import styles from './css/WaitHold.css'

class WaitHold extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className={styles["holdExpectation"]}>
                <div className={`${styles["message-text-apply"]} ${styles["message-text-apply-1"]}`}>
                    <span>Мы резервируем нужную сумму</span>
                </div>
                <div className={`${styles["message-text-apply"]} ${styles["message-text-apply-2"]}`}>
                    <span className={styles["spanT"]}>Это может занять 2-3 минуты</span>
                    <div className={styles["divT"]}>Не закрывайте эту страницу</div>
                    <span className={styles["spanT"]}>После этого Вы сможете осуществить операцию по самому подходящему курсу.</span>
                </div>
            </div>
        )
    }
}

export default WaitHold