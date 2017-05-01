import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Match, Link, Route} from 'react-router-dom'
import styles from './styles/index.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import CoreLayout from './containers/CoreLayout.jsx'

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <CoreLayout/>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

render(
  <App/>, document.getElementById('app'));