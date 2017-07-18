import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { Grid } from 'material-ui';
import {
  BrowserRouter,
  Route
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
      sideMenuOpen: true,
      sideMenuDocked: true,
      displaySideMenuToggle: false,
    };
  }

  componentDidMount() {
    // Setup layout based on window size
    this.setupLayout();
    window.addEventListener('resize', () => this.setupLayout());
  }

  toggleSideMenu() {
    console.log("Called toggleSideMenu()");
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    });
  }

  closeSideMenu() {
    this.setState({
      sideMenuOpen: false
    });
  }

  setupLayout() {
    if (window.innerWidth >= 960 && this.state.sideMenuDocked !== true) {
      console.log("Dimensions - Greater than 960", window.innerWidth);
      this.setState({
        sideMenuOpen: true,
        sideMenuDocked: true,
        displaySideMenuToggle: false
      });
    } else if (window.innerWidth < 960 && this.state.sideMenuDocked === true) {
      console.log("Dimensions - Less than 960", window.innerWidth);
      this.setState({
        sideMenuOpen: false,
        sideMenuDocked: false,
        displaySideMenuToggle: true
      });
    }
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
            <div id="app-sidemenu-container" className={this.state.sideMenuDocked? 'app-sidemenu-container-desktop':'app-sidemenu-container-mobile'}>
              <SideMenu open={this.state.sideMenuOpen} docked={this.state.sideMenuDocked} onCloseSideMenu={() => this.closeSideMenu()} />
            </div>
            <Grid id="app-content-container" item xs>
              <Header titleText="Tapsium Portal" displayHamburger={this.state.displaySideMenuToggle} onToggleSideMenu={() => this.toggleSideMenu()} />
              <Route exact path="/" component={HomePage} />
              <Route path="/todos" component={TodoPage} />
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
