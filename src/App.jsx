import { useState } from "react";
import "./App.css";

// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import Header from './components/Header'
// import NavbarComp  from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Drop from './components/cuttomer/drop'
// import Datafrom from './components/cuttomer/Datashop'
import Footer from './components/Footer';
// import Shopee from './components/cuttomer/shop'

// import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import DataShope from './Page/DataShop';

import NavBarExample from './components/Navbar';

// import Menu from './Components/Menu';
// import Contact from './Page/Contact';
function App() {
  return (
    <div className="App">
       {/* <NavBarExample />  */}
 <BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='dataShope' element={ <DataShope /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter> 
      {/* <NavbarComp /> */}
      {/* <Header /> */}
      {/* <Datafrom /> */}
      {/* <Drop /> */}
      {/* <Shopee /> */}
      <Footer />
    </div>
  );
}

export default App;
