import React, {Component} from 'react'
import styles from './css/SuccessPage.css'
import HeadTitle from '../HeadTitle'
import { Link } from 'react-router-dom'
import logo from './img/no-key-sign.png'

class SuccessPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return(
            <div className={styles["success"]}>
                <div className={`${styles['ccSuccessPartsBlock']} ${styles['greenRate']}`}>
                    <div className={`${styles["ccPart1"]}`} >
                        <span className="">08 ноября 2017, 10:33</span>
                    </div>
                    <div className={`${styles["ccPart2"]}`} >
                        <i className={`${styles['ccIconResultOperation']} ${styles['icon-free_extract']}`} style={{
                            backgroundImage: `url(${logo})`
                        }}></i>
                        <span className={`${styles['ccTextPart']} ${styles['ccTextPart1']}`}>Операция совершена успешно</span>
                        <span className={`${styles['ccTextPart']} ${styles['ccTextPart2']}`}>Неизрасходованные средства будут возвращены обратно на счёт.</span>
                        <span className={`${styles['ccTextPart']} ${styles['ccTextPart3']}`} >Остатки обновятся в течение 2-3 минут.</span>
                    </div>
                    <div className={`${styles['ccPart3']} ${styles['ccSuccess']}`}>
                        <span className={`${styles['resultOper']} ${styles['ccResOperPart1']}`}>Вы купили </span>
                        <span className={`${styles['resultOper']} ${styles['ccResOperPart2']}`}>1<span className="ccA2F USD">,03 </span></span>
                        <span className={`${styles['resultOper']} ${styles['ccResOperPart3']}`}> за 67<span className="ccA2F RUB">,00 </span> по курсу 65,21816</span>
                    </div>
                    <HeadTitle />
                    <div className={`${styles['ccPart4']}`} onClick={this.props.handleClickSuccessButton}>
                        <Link to="/main" style={{ textDecoration: 'none' }}>
                            <span className={`${styles['ccFinalButton']}`}>Готово</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuccessPage