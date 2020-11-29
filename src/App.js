import React from "react";
import './App.css';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'
import {
  orange,
  deepOrange,
  amber
} from "@material-ui/core/colors";

import Rotas from './rotas';


// import Dashboard from "./pages/Dashboard"

function App() {

  const temaDark = false
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? orange[700] : orange[500]
  const corSecundaria = temaDark ? deepOrange[900] : amber[500]

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
       <Rotas/>
    </MuiThemeProvider>
  );
}

export default App;
