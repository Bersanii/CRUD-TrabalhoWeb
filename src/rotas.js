import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Dashboard from "./pages/Dashboard"

export default function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </HashRouter>
    )
  }