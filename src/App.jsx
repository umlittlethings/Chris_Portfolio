import Home from "./Home"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Pages/About"
import ComingSoon from "./Pages/ComingSoon"
import Services from "./Pages/Services"
import Layout from "./Layout"
import ScrollToTop from "./ScrolltoTop"


function App() {
 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/ComingSoon" element={<ComingSoon/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Route>

      </Routes>
    </Router>
    
  )
}

export default App
