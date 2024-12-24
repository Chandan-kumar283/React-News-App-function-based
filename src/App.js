import './App.css';
import React, {useState} from 'react'
import Navbar from './Component/Navbar';
import Newscomponent from './Component/Newscomponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  LoadingBar  from "react-top-loading-bar";
function App (props) {
  const apikey = "fa8a8609c49640d7b09f6965344b633f"
  const [progress, setProgress] = useState()
  
    return (
      <div>
        <Router>
         <Navbar /> 
         <LoadingBar
         height={4}
        color="#f11946"
        progress ={progress}
        
      />
         <Routes>
      <Route exact path='/' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='general' country='us' category='general' />} />
      <Route exact path='/entertainment' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='entertainment' country='us' category='entertainment' />} />
      <Route exact path='/health' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='health' country='us' category='health' />} />
      <Route exact path='/science' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='science' country='us' category='science' />} />
      <Route exact path='/sports' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='sports' country='us' category='sports' />} />
      <Route exact path='/technology' element={<Newscomponent apikey={apikey} setProgress ={setProgress} key='technology' country='us' category='technology' />} />

         </Routes>
         </Router>
      </div>
    )
  
}
export default App;