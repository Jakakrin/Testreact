import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import  Carouse  from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Content from './components/Content';
import Sileconnter from './components/Sile_conten'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Header / >
      <Carouse / >
        <Content/>
        <Sileconnter />
        <Footer />
    </div>
  )
}

export default App