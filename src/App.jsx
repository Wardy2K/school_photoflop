import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import Developpeurs from './Pages/Developpeurs'
import Anchor from './Components/Anchor'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/developpeurs" component={Developpeurs} />
        </Switch>
        <Anchor />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
