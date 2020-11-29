import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom"
import Inicio from "../src/pages/Inicio"
import Dashboard from "../src/pages/Dashboard"
import Login from '../src/pages/Login'
import NotFound from "../src/pages/NotFound"

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    )
  }