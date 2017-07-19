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
      layoutMode: 'desktop',
      sideMenuOpen: true,
      sideMenuDocked: true,
      sideMenuDockedCollapsed: false
    };
  }

  componentDidMount() {
    // Setup layout based on window size
    this.setupLayout();
    window.addEventListener('resize', () => this.setupLayout());
  }

  toggleSideMenu() {
    if (this.state.layoutMode === 'desktop') {
      console.log("Called toggleSideMenu() - desktop mode");
      this.setState({
        sideMenuDockedCollapsed: !this.state.sideMenuDockedCollapsed
      });
    } else if (this.state.layoutMode === 'mobile') {
      console.log("Called toggleSideMenu() - mobile mode");
      this.setState({
        sideMenuOpen: !this.state.sideMenuOpen
      });
    }
  }

  closeSideMenu() {
    console.log("Called closeSideMenu()");
    this.setState({
      sideMenuOpen: false
    });
  }

  setupLayout() {
    if (window.innerWidth >= 960 && this.state.sideMenuDocked !== true) {
      console.log("Dimensions - Greater than 960", window.innerWidth);
      this.setState({
        layoutMode: 'desktop',
        sideMenuOpen: true,
        sideMenuDocked: true,
        sideMenuDockedCollapsed: false,
      });
    } else if (window.innerWidth < 960 && this.state.sideMenuDocked === true) {
      console.log("Dimensions - Less than 960", window.innerWidth);
      this.setState({
        layoutMode: 'mobile',
        sideMenuOpen: false,
        sideMenuDocked: false,
        sideMenuDockedCollapsed: false,
      });
    }
  }

  getSideMenuContainerClass() {
    if (this.state.sideMenuDocked) {
      if (this.state.sideMenuDockedCollapsed) {
        return 'app-sidemenu-container-desktop-collapsed';
      } else {
        return 'app-sidemenu-container-desktop';
      }
    } else {
      return 'app-sidemenu-container-mobile';
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
            <div id="app-sidemenu-container" className={this.getSideMenuContainerClass()}>
              <SideMenu
                open={this.state.sideMenuOpen}
                docked={this.state.sideMenuDocked}
                dockedCollapsed={this.state.sideMenuDockedCollapsed}
                onCloseSideMenu={() => this.closeSideMenu()} />
            </div>
            <Grid id="app-content-container" item xs>
              <Header
                docked={this.state.sideMenuDocked}
                dockedCollapsed={this.state.sideMenuDockedCollapsed}
                onToggleSideMenu={() => this.toggleSideMenu()} />
              <Grid id="app-content-page-container"
                container
                gutter={0}
                direction="column"
                align="stretch"
                justify="flex-start">
                <Grid item>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/todos" component={TodoPage} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
