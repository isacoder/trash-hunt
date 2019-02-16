import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';
// components
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Upload from './components/upload';
import FakeAuthentication from './components/fakeauthentication';
import Catalog from './container/catalog-page';
import Profile from './components/profile';
import SignIn from './components/SignIn';
import Item from './components/item';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <ScrollMemory />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/FakeAuthentication' component={FakeAuthentication} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/item' component={Item} />
          </Switch>
          <Nav />
          <Footer />
        </LastLocationProvider>
      </BrowserRouter>
    )
  }
}
export default connect(state => state, {})(AppRoutes);
