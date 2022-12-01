import React from 'react';
// import { Routes , Route } from 'react-router-dom';
//---- COMPONENTS ----------//
import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/Sidebar';

//------- PAGES  ---------//
import Home from './pages/home/Home';

//------- STYLE  ---------//
import "./App.css";

const App = () => {
  return (
    <div >
      <Topbar/>
      <div className='container'>
      <Sidebar/>
      <Home/>
      </div>
    </div>
  )
}

export default App