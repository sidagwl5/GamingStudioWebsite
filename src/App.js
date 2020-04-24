import React, { Component } from "react";
import { Router, Route, Switch } from "./components/navigate";
import MainPage from "./pages/MainPage";
import Rellax from "rellax";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class App extends Component {

  componentDidMount(){

      this.rellax = new Rellax(".rellax");
      AOS.init(
        {
          duration : 1000
        }
      );
  }

  render() {

    return (

      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    )
  }
}

