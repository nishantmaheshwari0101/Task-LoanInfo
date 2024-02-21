import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
// import Herosection from './component/Herosection'
import Newloanholder from './component/Newloanholder'
// import ListGroup from './component/ListGroup'
import Detail from './pages/Detail'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container p-5">
        {/* <Herosection/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/holder' element={<Newloanholder/>}/>
          <Route path='/detail' element={<Detail/>}/>
        </Routes>
        {/* <ListGroup/> */}
        
        
      </div>
      
    </Router>
  )
}

        
export default App
        
      

