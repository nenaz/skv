import React, { Component } from 'react'
import styles from './css/RejectedPage.css'
import HeadTitle from '../HeadTitle'
import { Link } from 'react-router-dom'
import Button from './Buttons'
import Span from './Span'
import Utils from '../../js/utils'

class RejectedPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className={`${styles["ccSuccessPartsBlock"]} ${styles["redRate"]}`}>
                <div className={styles["ccPart1"]}>
                    <Span textValue={Utils.generateDate()} />
                </div>
                <div className={styles["ccPart2"]}>
                    <Span firstClassName="ccIconResultOperation" />
                    <Span textValue="Операция не выполнена" firstClassName="ccTextPart" secondClassName="ccTextPart1"/>
                    <Span textValue="Попробуйте повторить" firstClassName="ccTextPart" secondClassName="ccTextPart2"/>
                    <Span textValue="операцию позднее" firstClassName="ccTextPart" secondClassName="ccTextPart3"/>
                </div>
                <div className={`${styles["ccPart3"]} ${styles["ccError"]}`}>
                    <div className={styles["ccListButton"]}>
                        <Button linkName='/rate' textButton='Повторить операцию' leftClassName="icon-doc_currency" rightClassName="icon-arrow-right" />
                        <Button linkName='/main' textButton='Отменить операцию' leftClassName="icon-declined" rightClassName="icon-arrow-right" />
                    </div>
                </div>

            </div>
        )
    }
}

export default RejectedPage