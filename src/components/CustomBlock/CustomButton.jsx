import React from 'react'
import styles from './css/CustomButton.css'
import {Link} from 'react-router-dom'

const CustomButton = (props) => {
    if (props.active) {
        return (
            <Link to="/rate" style={{textDecoration: 'none'}}>
                <span className={`${styles.ccMainTab} ${styles[props.active]}`} onClick={props.handleButtonClick}>Продолжить</span>
            </Link>
        )
    } else {
        return <span className={`${styles.ccMainTab}`}>Продолжить</span>
    }
}

export default CustomButton