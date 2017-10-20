import React from 'react'
import styles from './css/CustomButton.css'

const CustomButton = (props) => {
    return (
        <span className={`${styles.ccMainTab} ${styles[props.active]}`} >Продолжить</span>
    )
}

export default CustomButton