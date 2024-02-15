import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import FeatureSection from './components/FeatureSection';
import Borrowing from './components/Borrowing';
import Individual from './components/Individual';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Welcome />
      <FeatureSection />
      <Borrowing />
      <Individual />
      <BlogSection />
      <Footer />
    </Router>
  );
}

export default App;
