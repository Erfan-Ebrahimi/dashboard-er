import React from 'react';
import { Routes , Route } from 'react-router-dom';
//---- COMPONENTS ----------//
import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/Sidebar';

//------- PAGES  ---------//
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
//------- STYLE  ---------//
import "./App.css";

const App = () => {
  return (
    <div >
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/userList' element={<UserList/>}/>
          <Route path='/user/:userId' element={<User/>}/>
          <Route path='/newUser' element={<NewUser/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App