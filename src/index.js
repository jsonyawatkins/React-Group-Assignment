import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './header'
import About from './about'
import reportWebVitals from './reportWebVitals';
import ProductsInfo from './product-list';
import Footer from './footer'


ReactDOM.render(
    <React.StrictMode>
         <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/products" component={ProductsInfo} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

  ReactDOM.render(<Footer />, document.getElementById('footer'));



reportWebVitals();




