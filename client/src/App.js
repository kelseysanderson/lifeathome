import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { SiteProvider } from './Context/SiteContext';
import { BlogProvider } from './Context/BlogContext';

import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Manager from './pages/Manager'


function App() {
  return (
    <SiteProvider>
      <BlogProvider>
        <Router>
            <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={BlogPost} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/manager" component={Manager} />
            <Footer />
        </Router>
      </BlogProvider>
    </SiteProvider>
  );
}

export default App;

