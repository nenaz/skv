import React, {Component} from 'react'
import styles from './css/Buttons.css'

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
                    <div className={`${styles["action"]} ${styles["actionApply"]}`}>Купить</div>
                </div>
            </div>
        )
    }
}

export default Buttons