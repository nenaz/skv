import React, {Component} from 'react'
import OneRate from './OneRate'
import InfoBeforeFinish from './InfoBeforeFinish'
import PageTitle from './PageTitle'
import styles from '../css/App.css'
import {connect} from 'react-redux'
import {toggleLoader, changePage} from '../AC'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        // this.name = ''
    }

    // selectClassName() {
    //     if (this.props.changePage === 1) {
    //         this.name = 'right100'
    //     } else if (this.props.changePage === 3) {
    //         this.name = 'left100'
    //     }
    // }

    componentWillMount() {
        this.props.wsConnect.refreshers[0].stop();
        this.props.wsConnect.sendMessage('SubRate', {
            client: "2041234",
            sym: "USD/RUB",
            s: 574,
            cur: "RUB"
        });
        // console.log('componentWillMount page2')
        this.setState({name: 'right100'})
    }

    componentDidMount() {
        const me = this
        // console.log('componentDidMount page2')
        setTimeout(() => {
            me.setState({name: ''})
        }, 600)
        setTimeout(() => {
            me.props.toggleLoader()
        }, 1200)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        this.props.toggleLoader()
        this.props.wsConnect.sendMessage('UnSubRate', {})
        this.props.changePage(1)
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
        // console.log('render page2')
        // const name = this.selectClassName()
        return (
            <div className={`${styles.page2} ${styles[this.state.name]}`}>
              <PageTitle title="Выберите курс " />
              <OneRate />
              <InfoBeforeFinish />
            </div>
        )
    }
}

export default connect(state => ({
  changePage: state.changePage,
  wsConnect: state.wsConnect,
  toggleLoader: state.toggleLoader
}),{toggleLoader, changePage})(Page2)