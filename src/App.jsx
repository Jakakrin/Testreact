import { useState } from 'react'
import './App.css'
import Header from './components/Header'
// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Drop from './components/cuttomer/drop'
import Datafrom from './components/cuttomer/Datashop'
import Footer from './components/Footer';
// import Shope from './components/cuttomer/shop'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      	{/* <Navbar/> */}
      <Header />
      <Datafrom />
      {/* <Drop /> */}
		{/* <Shope /> */}
        {/* <Footer /> */}
    </div>
  )
}

export default App