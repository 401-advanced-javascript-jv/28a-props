import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import Message from './components/message/message';

class App extends React.Component {
  render() {
    return <Message/>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
