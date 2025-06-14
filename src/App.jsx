import './App.css'
import { Routes, Route } from 'react-router-dom'
import Lp from './assets/pages/Lp'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Lp />} />
    {/* <Route path="/about" element={<About />} /> */}
  </Routes>
  )
}

export default App
