import React from 'react'
import styles from '../css/LineRatesHeaderBlock.css'
import Span from './Span'

const LineRatesHeaderBlock = (props) => {
    return (
        <ul className={[styles.columns, styles["_3"], props.nameClass]}>
            {props.dataArr.map((item, i) => {
                let content = (item.spanClassName) ? <Span arrClassName={item.spanClassName} /> : item.str
                let liCLass = (item.liClassName) ? item.liClassName : ''
                return <li className={liCLass} key={i}>{content}</li>
            })}
        </ul>
    )
}

export default LineRatesHeaderBlock