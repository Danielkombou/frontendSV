import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'


const Routers = ()=> {
  return(
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

function App() {


  return (
    <>
      <Routers/>
    </>
  )
}

export default App
