import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      font-family: Plain,Helvetica Neue,Arial,Noto Sans,sans-serif;
      background-color:black;

}
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    height: 100vh;

  }
`
function App() {
  return (
    <div>
      <GlobalStyle />

     
      <Router>

        <Switch>
          <Route path='/about'> <About /> </Route>
          <Route path='/projects'> <Projects /> </Route>
          <Route path='/contact'> <Contact /> </Route>
          <Route path='/'> <Home /> </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
