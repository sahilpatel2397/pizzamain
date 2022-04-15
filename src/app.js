// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Loading } from "./components";
import { Home, Profile, Order } from "./views";
import { Menu } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./pizza42.css";
import "./bootstrap.css";
import "./normalize.css";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/order" exact component={Order} />
          <ProtectedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
