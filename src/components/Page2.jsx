import React, {Component} from 'react'
import OneRate from './OneRate'
import InfoBeforeFinish from './InfoBeforeFinish'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import {toggleLoader, changePage, startAnimation} from '../AC'
import Utils from '../js/utils'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.nextpage = false
        
        this.handleButtonClickOk = this.handleButtonClickOk.bind(this)
        this.handleTitleButtonClick = this.handleTitleButtonClick.bind(this)
        this.getDataOrder = this.getDataOrder.bind(this)
    }

    handleButtonClickOk() {
        this.props.wsConnect.sendMessage('UnSubRate', {})
        this.props.wsConnect.sendMessage('Order', this.getDataOrder())
        this.props.toggleLoader()
        this.nextpage = true
    }

    getDataOrder() {
        const ddd = new Date(),
            dateObj = Utils.generateDate(true)
        return {
            id: ddd.getTime(),
            client: '2041111',
            sym: "USD/RUB",
            from: this.props.accountFrom,
            to: this.props.accountTo,
            price: this.props.changeOneRate.a,
            amountFrom: this.props.inputValue,
            amountTo: this.props.inputValue / this.props.changeOneRate.a,
            cur: "RUB",
            time: dateObj.time
        }
    }

    handleTitleButtonClick() {
        this.props.wsConnect.sendMessage('UnSubRate', {})
        this.nextpage = false
        setTimeout(() => {
            window.history.back()
            this.props.toggleLoader()
        }, 600)
    }

    componentWillMount() {
        this.props.wsConnect.refreshers[0].stop();
        this.props.wsConnect.sendMessage('SubRate', {
            client: "2041111",
            sym: "USD/RUB",
            s: 574,
            cur: "RUB"
        });
    }

    componentDidMount() {
        const me = this
        setTimeout(() => {
            me.props.toggleLoader()
        }, 1200)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        this.props.toggleLoader()
        this.props.wsConnect.sendMessage('UnSubRate', {})
        // this.props.startAnimation(true)
        if(this.nextpage) {
            this.props.changePage(3)
        } else {
            this.props.changePage(1)
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('this.props.changeHold')
        console.log(this.props.changeHold)
        return (
            <div className={`${styles.page2}`} >
              <PageTitle title="Выберите курс " handleTitleButtonClick={this.handleTitleButtonClick} />
              <OneRate />
              <InfoBeforeFinish handleButtonClickOk={this.handleButtonClickOk}/>
            </div>
        )
    }
}

export default connect(state => ({
    page: state.changePage,
    wsConnect: state.wsConnect,
    toggleLoader: state.toggleLoader,
    changeHold: state.changeHold,
    accountFrom: state.accountFrom,
    accountTo: state.accountTo,
    changeOneRate: state.changeOneRate,
    inputValue: state.inputValue
}),{toggleLoader, changePage, startAnimation})(Page2)