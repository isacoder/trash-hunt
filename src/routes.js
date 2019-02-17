import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';
// components
import Nav from './components/nav';
import Upload from './components/upload';
import FakeAuthentication from './components/fakeauthentication';
import Catalog from './container/catalog-page';
import Profile from './components/profile';
import SignIn from './components/SignIn';
import MyItem from './components/my-item';
import CollectionItem from './components/collection-item';
// for test
// import Footer from './components/footer';

class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <LastLocationProvider>
          <ScrollMemory />
          <Switch>
            <Route exact path='/' component={Catalog} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/FakeAuthentication' component={FakeAuthentication} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/my-item' component={MyItem} />
            <Route exact path='/collection-item' component={CollectionItem} />
          </Switch>
          <Nav />
          {/* for test */}
          {/* <Footer /> */}
        </LastLocationProvider>
      </BrowserRouter>
    )
  }
}
export default connect(state => state, {})(AppRoutes);
