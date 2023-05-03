import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Drop from './components/cuttomer/drop'
// import Datafrom from './components/cuttomer/Datashop'
// import Footer from './components/Footer';
// import Shopee from './components/cuttomer/shop'





import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Error from './Page/Error';
import Menu from './Components/Menu';
import Contact from './Page/Contact';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      {/* <Header /> */}
      {/* <Datafrom /> */}
      {/* <Drop /> */}
		{/* <Shopee /> */}
        {/* <Footer /> */}
    </div>
  )
}

export default App