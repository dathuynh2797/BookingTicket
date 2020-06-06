import React, { Component } from "react";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Admin from "./pages/Admin";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AdminTemplate path="/admin" component={Admin} exact />
          <HomeTemplate path="/home" component={Home} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
