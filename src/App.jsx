import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {About,Contact,Projects,Home} from './pages'
function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
    </>
  )
}

export default App
