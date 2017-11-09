import React, { Component } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import styles from '../css/App.css'
import Socket from '../js/socket'
import {TESTACCOUNT} from '../js/consts'
import {
  changeRates,
  changeAccountsList,
  changeOneRate,
  wsConnect,
  toggleLoader
} from '../AC'
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Loader from './Loader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import createHistory from 'history/createBrowserHistory'

const NavLink = (props) => (
  <li>
    <Link {...props} />
  </li>
)

const history = createHistory()



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
    this.handleChangeRoter = this.handleChangeRoter.bind(this)
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

  renderPage({ match: { params } }) {
    switch (params.name) {
      case 'rate': return <Page2 />
      case 'final': return <Page3 />
      default: return <Page1 />
    }
  }

  handleChangeRoter() {
    console.log('handleChangeRoter')
  }

  render() {
    console.log('render')
    // console.log(history)
    // if (this.state.accountList && this.props.rates.length) {
    if (this.state.connection && this.state.haveAccounts && this.state.haveRates) {
      return (
        <Router>
          <Route render={({location}) => (
            <div>
              <Route exact path="/" render={() => (
                <Redirect to="/main" />
              )} />
              {/* <ul >
                <NavLink to="/main">main</NavLink>
                <NavLink to="/rate">rate</NavLink>
                <NavLink to="/final">final</NavLink>
              </ul> */}
              <div className={styles.appElem}>
                <ReactCSSTransitionGroup transitionName={{
                    'enter': styles['exp-enter'],
                    'enterActive': styles['exp-enter-active'],
                    'leave': styles['exp-leave'],
                    'leaveActive': styles['exp-leave-active'],
                  }}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  <Route
                    location={location}
                    key={location.key}
                    path="/:name"
                    component={this.renderPage}
                  />
                </ReactCSSTransitionGroup>
              </div>
            </div>
          )}/>
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