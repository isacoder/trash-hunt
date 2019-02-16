import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';
// components
import Home from './components/home';
import Sample1 from './components/sample1';
import Sample2 from './components/sample2';
import Upload from './components/upload';
import Catalog from './container/catalog';

class AppRoutes extends Component {
  render() {
    return(
      <BrowserRouter>
        <LastLocationProvider>
          <ScrollMemory />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sample1' component={Sample1} />
            <Route exact path='/sample2' component={Sample2} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/catalog' component={Catalog} />
          </Switch>
        </LastLocationProvider>
      </BrowserRouter>
    )
  }
}
export default connect(state => state, {})(AppRoutes);