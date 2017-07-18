import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid } from 'material-ui';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/header/header';
import SideMenu from './components/sideMenu/sideMenu';
import HomePage from './pages/home/HomePage';
import TodoPage from './pages/todo/TodoPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Todo Application';
    this.state = {
      sideMenu: {
        open: false,
        docked: true,
      }
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Grid id="app-container"
            container
            direction="row"
            align="stretch"
            justify="flex-start">
            <Grid id="app-sidemenu-container" item>
              <SideMenu />
            </Grid>
            <Grid id="app-content-container" item xs>
              <Header titleText="Tapsium Portal" />
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todo">Todo</Link></li>
              </ul>
              <hr />
              <Route exact path="/" component={HomePage} />
              <Route path="/todo" component={TodoPage} />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
