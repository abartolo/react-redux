import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Home from './pages/home/home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Todo Application';
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
