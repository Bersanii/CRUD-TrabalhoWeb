import React from "react";
import './App.css';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'
import {
  orange,
  lightBlue,
  blue,
  deepOrange
} from "@material-ui/core/colors";
import Rotas from './rotas'


import Dashboard from "./pages/Dashboard"

function App() {

  const temaDark = false
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? orange[500] : blue[500]
  const corSecundaria = temaDark ? deepOrange[900] : lightBlue[500]

  let theme = createMuiTheme(
    {
      palette: {
        type: tipoPaleta,
        primary: {
          main: corPrimaria
        },
        secondary: {
          main: corSecundaria
        }
      }
    })

  theme = responsiveFontSizes(theme)

  return (
    <MuiThemeProvider theme={theme} >
       {/* <Rotas /> */}
       <Dashboard/>
    </MuiThemeProvider>
  );
}

export default App;
