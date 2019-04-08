import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import configureStore from 'store/configureStore';
import Header from 'components/top/Header';
import Footer from 'components/top/Footer';
import Home from 'components/top/Home';
import Developers from 'components/top/Developers';
import GroupList from 'components/groups/GroupList';

import './App.scss';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
              {/*<Route path="/about" component={} />*/}
              {/*<Route path="/announcement" component={} />*/}
              <Route exact path="/" component={Home} />
              <Route path="/developers" component={Developers} />
              <Route path="/groups" component={GroupList} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  );
};
