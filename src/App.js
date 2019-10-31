import React from 'react';
import './App.css';
import Scan from './components/Scan/Scan.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SuccessPage from './components/Qr/SuccessPage';


export default function App() {
  return (
    <Router>
      <section className="App-mainPage">
        <Switch>
          <Route path="/scan">
            <Scan/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/checkout">
            <CheckOut/>
          </Route>
          <Route path="/success">
            <SuccessPage/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}
