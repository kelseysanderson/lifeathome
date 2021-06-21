import React from "react";
import { SiteProvider } from './Context/SiteContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Manager from './pages/Manager'
import './App.css';

function App() {
  return (
    <SiteProvider>
      <Router>
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/manager" component={Manager} />
          <Footer />
      </Router>
    </SiteProvider>
  );
}

export default App;

