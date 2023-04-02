import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero></Hero>
    </div>
  )
}

export default App
