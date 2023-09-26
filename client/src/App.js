import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail.jsx'
import CreateVideogame from './components/CreateVideogame/CreateVideogame.jsx'
// import About from "./components/About/About";
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/'


function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addgame" component={CreateVideogame} />
          <Route exact path="/videogame/:id" component={Detail} />
        </Switch>
    </div>
    </BrowserRouter>
);
}

export default App;
