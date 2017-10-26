import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './css/index.css'
import registerServiceWorker from './registerServiceWorker';
// import Socket from './js/socket'

// console.log('start')

// ws = new Socket()
// ws.connect('ws://localhost:8099', 'echo-protocol')
// .then((connection) => {
//   console.log('result')
// }, (error) => {
//   console.log('error')
// })

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
