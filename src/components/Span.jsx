import React from 'react'
// import styles from '../css/Span.css'

const Span = (props) => {
    return (
        <span className={props.listClassName}>{props.currencyName}</span>
    )
}

export default Span