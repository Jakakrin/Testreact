import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import  Carouse  from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Header / >
      <Carouse / >
    </div>
  )
}

export default App
