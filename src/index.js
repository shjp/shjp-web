import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Developer from "./components/developer";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    {/*<Route path="/about" component={} />*/}
                    {/*<Route path="/announcement" component={} />*/}
                    <Route path="/developer" component={Developer} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
, document.querySelector('#root'));


//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
