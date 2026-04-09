import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Forgot from './pages/Forgot';
import LoginSignup from './assets/Components/LoginSignup'
import Signedup from './assets/Components/Signedup';
import Signedin from './assets/Components/Signedin';


const App = () => {
  return (
    <div className = "">
      <Routes>
        <Route path='/' element={ <LoginSignup /> } />
        <Route path = '/forgot' element = { <Forgot /> } />
        <Route path = '/signedup' element= { <Signedup />} />
        <Route path = '/signedin' element= { <Signedin />} />
      </Routes>
      
    </div>
  )
}

export default App
