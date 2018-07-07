import React, { Component } from 'react';
import NavBar from './components/navbar';
import GuitarBasics from './components/guitarbasics';
import BasicCards from './components/basiccards';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import OnlyForwards from './components/views/onlyforwards';
import ForwardBackward from './components/views/forwardbackward';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact strict component={GuitarBasics} />
        <Route path="/onlyforwards" exact strict component={OnlyForwards} />
        <Route path="/forwardbackward" exact strict component={ForwardBackward} />
      </div>
      </Router>
    );
  }
}

export default App;
