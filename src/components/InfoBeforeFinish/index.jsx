import React, {Component} from 'react'
import HeadTitle from '../HeadTitle'
import styles from './css/InfoBeforeFinish.css'
import {connect} from 'react-redux'
import Utils from '../../js/utils'

class InfoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props)
        let accountF = {__html: (this.props.accountFrom) ? Utils.account2format(this.props.accountFrom.id) : ''}
        let accountT = {__html: (this.props.accountTo) ? Utils.account2format(this.props.accountTo.id) : ''}
        return (
            <div id="block">
                <HeadTitle title="Детали" />
                <div className={styles["dpOperationBody"]}>
                    <div className={styles["dpOperationPartnerInfo"]}>
                        <div className={`${styles["dpOperationPartnerMoreInfo"]} ${styles["open"]}`}>
                            <p className="aplly-company">Компания: <span>ЗАО "Пропан-трейдинг"</span></p>
                            <p className="apply-account-from">Со счета: <span dangerouslySetInnerHTML={accountF}></span></p>                            
                            <p className="apply-account-to">На счет: <span dangerouslySetInnerHTML={accountT}></span></p>
                            <p className="apply-amount"><span>Сумма списания: </span><span>96<span className="ccA2F RUB">,00 </span></span></p>
                        </div>
                    </div>
                </div>
                <HeadTitle title="Как только Вас устроит курс, нажмите на кнопку Купить" />
                <div className="holdExpectation" >
                    <div className="dpMainSvgContainer"></div>
                    <div className="message-text-apply message-text-apply-1">
                        <span>Мы резервируем нужную сумму</span>
                    </div>
                    <div className="message-text-apply message-text-apply-2">
                        <span>Это может занять 2-3 минуты</span>
                        <div>Не закрывайте эту страницу</div>
                        <span>После этого Вы сможете осуществить операцию по самому подходящему курсу.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    accountFrom: state.changeAccountFrom,
    accountTo: state.changeAccountTo
}))(InfoBlock)