import './App.css';
import Home from './components/Home';
import About from './components/AboutUs';
import Products from './components/Products';
import Branches from './components/Branches';
import Gallery from './components/Gallery';
import Developers from './components/Developers'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

function App() {
  return (
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
        </Routes>
      </Router>

      <Footer/>
    </>
  );
}


export default App;


// import Home from './components/Home';
// import About from './components/AboutUs';
// import Products from './components/Products';
// import Branches from './components/Branches';
// import Gallery from './components/Gallery';
// import Developers from './components/Developers'
// import Navbar from './components/Navbar';
// import React, { useState } from "react";
// import './App.css';

{/* <Routes>
        <Route path='/' Component={Home}>
          <Home></Home>
        </Route>
        <Route path='/about' Component={About}>
          <Home></Home>
        </Route>
        <Route path='/products' Component={Products}>
          <Home></Home>
        </Route>
        <Route path='/branch' Component={Branches}>
          <Home></Home>
        </Route>
        <Route path='/gallery' Component={Gallery}>
          <Home></Home>
        </Route>
        <Route path='/developers' Component={Developers}>
          <Home></Home>
        </Route>
      </Routes> */}