import React, { Component } from 'react';
import NavBar from './components/navbar';
import GuitarBasics from './components/guitarbasics';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import OnlyForwards from './components/views/onlyforwards';
import ForwardBackward from './components/views/forwardbackward';
import Reverse from './components/views/reverse';
import HorizontalVertical from './components/views/horizontalvertical';
import MajorScales from './components/views/majorscales';
import AllScales from './components/views/allscales';
import Legatos from './components/views/legatos';
import DashBoard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact strict component={DashBoard} />
        <Route path="/guitarbasics" exact strict component={GuitarBasics} />
        <Route path="/onlyforwards" exact strict component={OnlyForwards} />
        <Route path="/forwardbackward" exact strict component={ForwardBackward} />
        <Route path="/reverse" exact strict component={Reverse} />
        <Route path="/horizontalvertical" exact strict component={HorizontalVertical} />
        <Route path="/majorscales" exact strict component={MajorScales} />
        <Route path="/allscales" exact strict component={AllScales} />
        <Route path="/legatos" exact strict component={Legatos} />
      </div>
      </Router>
    );
  }
}

export default App;
