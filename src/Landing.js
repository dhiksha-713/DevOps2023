import React from 'react'
import Home from './components/Home';
import About from './components/AboutUs';
import Products from './components/Products';
import Branches from './components/Branches';
import Gallery from './components/Gallery';
import Developers from './components/Developers'
import Navbar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

export default function Landing() {
  return (
    <div>
      <>
      <Router>
      
      <Navbar />
        <Routes>
          <Route path='/' Component = {Home} exact></Route>
          <Route path='/about' Component={About} exact></Route>
          <Route path='/products' Component = {Products} exact></Route>
          <Route path='/branch' Component = {Branches} exact></Route>
          <Route path='/gallery' Component={Gallery} exact></Route>
          <Route path='/developers' Component={Developers} exact></Route>
          {/* <Route path={window.location.} Component={Login} exact></Route> */}
        </Routes>
      </Router>

      <Footer/>
      </>
    </div>
  )
}
