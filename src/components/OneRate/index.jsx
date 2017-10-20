import React, {Component} from 'react'
import styles from './css/OneRate.css'

class OneRateIndex extends Component {
    render(){
        return(
            <div className={styles["big-title"]}>
                <p className={styles["apply-title"]}>Вы покупаете доллары за рубли</p>
                <div className={styles["apply-rate"]}>
                    <div className={styles["blockUpdateRate"]}>
                        <span className={styles["neutral"]}>6</span>
                        <span className={styles["neutral"]}>5</span>
                        <span className={styles["neutral"]}>,</span>
                        <span className={styles["redRate"]}>1</span>
                        <span className={styles["redRate"]}>9</span>
                        <span className={styles["redRate"]}>3</span>
                        <span className={`${styles["neutral"]} ${styles["hidden"]}`}>0</span>
                        <span className={`${styles["neutral"]} ${styles["hidden"]}`}>0</span>
                        <span className={`${styles["{styles[neutral"]} ${styles["hidden"]}`}>0</span>
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

export default OneRateIndex