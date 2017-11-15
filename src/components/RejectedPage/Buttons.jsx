import React from 'react'
import styles from "./css/RejectedPage.css"
import {Link} from 'react-router-dom'
import Span from './Span'

const Button = (props) => {
    return <Link to={props.linkName} style={{ textDecoration: 'none' }}>
            <div className={styles["ccFooterBlockElem"]}>
                <Span firstClassName='flex-item' secondClassName={props.leftClassName}/>
                <Span firstClassName='flex-item' textValue={props.textButton}/>
                <Span firstClassName='flex-item' secondClassName={props.rightClassName}/>
            </div>
        </Link>
}

export default Button