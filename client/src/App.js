import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Header />
          <Route exact path="/" component={Home} />
        <Footer />
    </Router>
  );
}

export default App;
