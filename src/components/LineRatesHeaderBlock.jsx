import React from 'react'
import styles from '../css/LineRatesHeaderBlock.css'
import Span from './Span'

const LineRatesHeaderBlock = (props) => {
    return (
        <ul className={`${styles.columns} ${props.nameClass}`}>
            {props.dataArr.map((item, i) => {
                let content = (item.spanClassName) ? <Span arrClassName={item.spanClassName} currencyName={item.str} /> : item.str
                // let liCLass = (item.classType) ? item.liClassName : ''
                return <li className={`${styles[item.classType]} ${styles[item.classGroup]} ${styles[item.classGroupColor]}`} key={i}>{content}</li>
            })}
        </ul>
    )
}

export default LineRatesHeaderBlock