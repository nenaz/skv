import React, { Component } from 'react'
import styles from './css/RejectedPage.css'
import HeadTitle from '../HeadTitle'
import { Link } from 'react-router-dom'

class RejectedPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={`${styles["ccSuccessPartsBlock"]} ${styles["redRate"]}`}>
                <div className={styles["ccPart1"]}>
                    <span>14 ноября 2017, 11:47</span>
                </div>
                <div className={styles["ccPart2"]}>
                    <i className={`${styles["ccIconResultOperation"]} ${styles["icon-free_extract"]} ${styles["icon-attention"]}`}></i>
                    <span className={`${styles["ccTextPart"]} ${styles["ccTextPart1"]}`}>Операция не выполнена</span>
                    <span className={`${styles["ccTextPart"]} ${styles["ccTextPart2"]}`}>Попробуйте повторить</span>
                    <span className={`${styles["ccTextPart"]} ${styles["ccTextPart3"]}`}>операцию позднее</span>
                </div>
                <div className={`${styles["ccPart3"]} ${styles["ccError"]}`}>
                    <div className={styles["ccListButton"]}>
                        <div className={styles["ccFooterBlockElem"]}>
                            <span className={` ${styles['flex-item']} ${styles["icon-doc_currency"]} `}>icon</span>
                            <span className={` ${styles['flex-item']} `}>Повторить операцию</span>
                            <span className={` ${styles['flex-item']} ${styles["icon-arrow-right"]} `}>icom</span>
                        </div>
                        <div className={styles["ccFooterBlockElem"]}>
                            <i className={styles["icon-declined"]}></i>
                            <span>Отменить операцию</span>
                            <i className={styles["icon-arrow-right"]}></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default RejectedPage