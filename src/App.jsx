import Home from "./Home"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Pages/About"
import ComingSoon from "./Pages/ComingSoon"


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/ComingSoon" element={<ComingSoon/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
