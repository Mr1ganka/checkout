import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

 import  Home  from './Pages/Home/Home';
 import  PlayList  from './Pages/Playlist/PlayList';

import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/Navbar/BottomNav';

// import BottomNav from './Components/Navbar/BottomNav';


const App =() => {
  return (
  <Router>
   <Header/>
  <div className='app'>
    <Routes>
       <Route exact path="/home" element={<Home/>}/>
          
        
         <Route exact path="/list" element={<PlayList/>} />
       
         </Routes></div>
  <SimpleBottomNavigation/> 
  </Router>
  
    // 
    //   <Navbar/>
    //   <main>
    //   <Routes>
    //     <Route exact path="/" element={<Home/>}/>
          
        
    //     <Route exact path="/list" element={<PlayList/>} />
       
    //     </Routes>
    //   </main>
    // </Router>
  );
}

export default App;
