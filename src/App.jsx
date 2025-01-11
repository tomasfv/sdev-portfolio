import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import Project from './components/Project';
function App() {
  

  return (
    <Router>
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/project/:id' element={<Project/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
