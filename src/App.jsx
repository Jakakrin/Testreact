import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      	<Navbar/>
      <Header />
		
        <Footer />
    </div>
  )
}

export default App