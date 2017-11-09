import React, {Component} from 'react'
import HeadTitle from '../HeadTitle'
import styles from './css/InfoBeforeFinish.css'
import {connect} from 'react-redux'
import Utils from '../../js/utils'
import Buttons from './Buttons'
import HoldInfoBlock from './HoldInfoBlock'

class InfoBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // console.log(this.props)
        let accountF = {__html: (this.props.accountFrom) ? Utils.account2format(this.props.accountFrom.id) : ''}
        let accountT = {__html: (this.props.accountTo) ? Utils.account2format(this.props.accountTo.id) : ''}
        let amount = {__html: Utils.amount2Format(this.props.inputValue, 'RUB', ',', true)}
        return (
            <div id="block">
                <HeadTitle title="Детали" />
                <div className={styles["dpOperationBody"]}>
                    <div className={styles["dpOperationPartnerInfo"]}>
                        <div className={`${styles["dpOperationPartnerMoreInfo"]} ${styles["open"]}`}>
                            <p className="aplly-company">Компания: <span>ЗАО "Пропан-трейдинг"</span></p>
                            <p className="apply-account-from">Со счета: <span dangerouslySetInnerHTML={accountF}></span></p>                            
                            <p className="apply-account-to">На счет: <span dangerouslySetInnerHTML={accountT}></span></p>
                            <p className="apply-amount">Сумма списания: <span dangerouslySetInnerHTML={amount}/></p>
                        </div>
                    </div>
                </div>
                <HeadTitle title="Как только Вас устроит курс, нажмите на кнопку Купить" />
                <Buttons handleButtonClickOk={this.props.handleButtonClickOk} />
                <HoldInfoBlock />
            </div>
        )
    }
}

export default connect(state => ({
    accountFrom: state.changeAccountFrom,
    accountTo: state.changeAccountTo,
    inputValue: state.inputValue,
}))(InfoBlock)