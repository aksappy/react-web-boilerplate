import React from 'react';
import {render} from 'react-dom';
import styles from './index.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <p> Hello React!</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));