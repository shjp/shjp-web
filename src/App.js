import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { StoreProvider } from 'easy-peasy';

import store from 'store';
import GlobalListener from 'components/top/GlobalListener';
import Header from 'components/top/Header';
import Footer from 'components/top/Footer';
import Home from 'components/top/Home';
import Developers from 'components/top/Developers';
import EventPage from 'components/events/EventPage';
import EventCreatePage from 'components/events/EventCreatePage';
import GroupList from 'components/groups/GroupList';
import LoginPage from 'components/login/LoginPage';

import './App.scss';

export default function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <StoreProvider store={store}>
        <BrowserRouter>
          <>
            <GlobalListener/>
            <Header/>
            <Switch>
                {/*<Route path="/about" component={} />*/}
                {/*<Route path="/announcement" component={} />*/}
                <Route exact path="/" component={Home}/>
                <Route exact path="/developers" component={Developers}/>
                <Route exact path="/groups" component={GroupList}/>
                <Route exact path="/events" component={EventPage}/>
                <Route exact path="/events/create" component={EventCreatePage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
            <Footer/>
          </>
        </BrowserRouter>
      </StoreProvider>
    </MuiPickersUtilsProvider>
  );
};
