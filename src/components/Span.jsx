import React from 'react'
import styles from '../css/Span.css'

const Span = (props) => {
    return (
        <span className={` ${styles[props.firstClassName]} ${styles[props.secondClassName]} ${styles[props.thirdClassName]} `}>{props.textValue}</span>
    )
}

export default Span