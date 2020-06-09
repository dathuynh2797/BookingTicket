import React, { Component } from "react";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Admin from "./pages/Admin";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import ShowTime from "./pages/ShowTime";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AdminTemplate path="/admin" component={Admin} exact />
          <HomeTemplate path="/" component={Home} exact />
          <HomeTemplate
            path="/moviedetail/:maPhim"
            component={MovieDetail}
            exact
          />
          <HomeTemplate
            path="/showtime/:maLichChieu"
            component={ShowTime}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
