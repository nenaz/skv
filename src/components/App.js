import React, { Component } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import styles from '../css/App.css'
import Socket from '../js/socket'
import {TESTACCOUNT} from '../js/consts'
import {changeRates, changeAccountsList, changeOneRate, wsConnect, toggleLoader} from '../AC'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import Loader from './Loader'

// import {HashRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      connection: false,
      haveAccounts: false,
      haveRates: false
    }

    this.handleClickGetRate = this.handleClickGetRate.bind(this)
  }

  componentWillMount() {
    const me = this;
    this.ws = new Socket()
    
    // this.ws.connect('ws://10.255.14.131:8099', 'echo-protocol')
    this.ws.connect('ws://localhost:8099', 'echo-protocol')
      .then((connection) => {
        console.log('result')
        this.setState({connection: connection})
        me.ws.newData = (e) => me.wsOnMessageEvent(JSON.parse(e.data))
        // debugger
        me.props.wsConnect(me.ws)
        me.getStartDataFromServer()
      }, (error) => {
        console.log('error')
        this.setState({connection: false})
      })
    // debugger
    
    // this.ws = new WebSocket('ws://localhost:8099', 'echo-protocol')
    // this.ws.onopen = e => this.getStartDataFromServer()
    // this.ws.onmessage = e => this.wsOnMessageEvent(JSON.parse(e.data))
    // this.ws.onerror = e => this.setState({ error: 'WebSocket error' })
    // this.ws.onclose = e => !e.wasClean && this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` })
  }

  getStartDataFromServer() {
    const me = this
    me.handleClickGetRate('GetAccounts', {client: TESTACCOUNT})
    me.ws.wsCreateRefresher({
      method: 'GetRate',
      withParameters: false,
      data: {}
    }, 5000, me.handleClickGetRate)
    this.ws.wsEnableRefreshers()
  }

  wsOnMessageEvent(data) {
    // console.log(this.props)
    // debugger
      switch (data[0]) {
        case 'GetRate': this.props.changeRates(data[1])
          this.setState({haveRates: true})
          break
        case 'Accounts': this.props.changeAccountsList(data[1].accounts)
          this.setState({haveAccounts: true})
          break
        case 'SubRate': this.props.changeOneRate(data[1])
          break
        case 'UnSubRate': this.ws.wsEnableRefreshers()
          this.props.toggleLoader()
          break
        default: console.log('default')
      }
  }

  handleClickGetRate(str, obj = {}) {
      this.ws.sendMessage(str, obj);
  }

  componentDidMount() {}

  componentWillUpdate(nextProps, nextState) {}

  componentWillUnmount() {
    this.ws.close()
  }

  render() {
    console.log('render')
    // if (this.state.accountList && this.props.rates.length) {
    if (this.state.connection && this.state.haveAccounts && this.state.haveRates) {
      return (
        <Router>
          <div className={styles.appElem}>
            <Route path="/" component={Page1} />
            <Route path="/rate" component={Page2} />
            <Route path="/final" component={Page3} />
            <Loader />
          </div>
        </Router>
      )
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default connect(null,{
  changeRates,
  changeAccountsList,
  changeOneRate,
  wsConnect,
  toggleLoader
})(App)