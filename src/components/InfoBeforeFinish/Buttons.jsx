import React, {Component} from 'react'
import styles from './css/Buttons.css'
import {Link} from 'react-router-dom'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className={`${styles["ccActionButtons"]}`}>
                <div className={`${styles["ccButtonsBlock"]}`}>
                    <div className={`${styles["action"]} ${styles["actionClose"]}`}>Отказаться</div>
                    <Link to="/final" style={{textDecoration: 'none'}}>
                        <div className={`${styles["action"]} ${styles["actionApply"]}`} onClick={this.props.handleButtonClickOk}>Купить</div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Buttons