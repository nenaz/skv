import React, {Component} from 'react'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import { toggleLoader } from '../AC'

class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
        const me = this
        // setTimeout(() => {
        //     me.setState({ name: '' })
        // }, 600)
        setTimeout(() => {
            me.props.toggleLoader()
        }, 1200)
    }

    componentWillMount() {
        this.setState({ name: 'right100' })
    }

    render() {
        return (
            <div className={`${styles.page3}`}>
                <PageTitle title="" />
                <div id="success">
                    <div className="ccSuccessPartsBlock greenRate">
                        <div className="ccPart1" >
                            <div className="ccCloseSuccess" action="close-window">
                                <i className="icon-arrow-left dpIcons"></i>
                            </div>
                            <span className="">08 ноября 2017, 10:33</span>
                        </div>
                        <div className="ccPart2">
                            <i className="ccIconResultOperation icon-free_extract"></i>
                            <span className="ccTextPart ccTextPart1">Операция совершена успешно</span>
                            <span className="ccTextPart ccTextPart2">Неизрасходованные средства будут возвращены обратно на счёт.</span>
                            <span className="ccTextPart ccTextPart3">Остатки обновятся в течение 2-3 минут.</span>
                        </div>
                        <div className="ccPart3 ccSuccess">
                            <span className="resultOper ccResOperPart1">Вы купили </span>
                            <span className="resultOper ccResOperPart2">1<span className="ccA2F USD">,03 </span></span>
                            <span className="resultOper ccResOperPart3"> за 67<span className="ccA2F RUB">,00 </span> по курсу 65,21816</span>
                        </div>
                        <div className="ccPart3 ccError" >
                            <ul>
                                <li className="ccFooterBlockElem" action="repeatOperation">
                                    <i className="icon-doc_currency"></i>
                                    <span>Повторить операцию</span>
                                    <i className="icon-arrow-right"></i>
                                </li>
                                <li className="ccFooterBlockElem" action="canselOperation">
                                    <i className="icon-declined"></i>
                                    <span>Отменить операцию</span>
                                    <i className="icon-arrow-right"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="ccPart3 ccWait" ></div>
                    </div>
                    <div className="ccPart4">
                        <h3 className="dpSidebarAccountsHeader"></h3>
                        <span className="ccFinalButton" action="close-window">Готово</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
}), { toggleLoader })(Page3)