import React from 'react';
import "./user.scss";
import { Link } from 'react-router-dom';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

import p1 from "../../asset/p1.jpg";
// import p2 from "../../asset/p2.jpg";
// import p3 from "../../asset/p3.jpg";
// import p4 from "../../asset/p4.jpg";

const User = () => {
  return (
    <div className='user'>
      <div className="uHeader">
        <h1 className="uTitle">Edit User</h1>
        <Link to="/newUser">
          <button className='uAddButton'>Create</button> 
        </Link>
      </div>
      <div className="uContainer">
        <div className="uShow">
          <div className="uShowTop">
            <img src={p1} alt="uImg" className="uShowImg" />
            <div className="uTopTitle">
              <span className="uShowUsername">Erfan Ebi</span>
              <span className="uShowUserJob">Front-end Developer</span>
            </div>
          </div>
          <div className="uShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <PermIdentityIcon className='userShowIcon'/>
              <span className="userShowInfoTitle">Erfan__es</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className='userShowIcon'/>
              <span className="userShowInfoTitle">1998.05.11</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <PhoneAndroidIcon className='userShowIcon'/>
              <span className="userShowInfoTitle">09918790969</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className='userShowIcon'/>
              <span className="userShowInfoTitle">Erfan88@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationOnOutlinedIcon className='userShowIcon'/>
              <span className="userShowInfoTitle">Tehran | Iran </span>
            </div>
          </div>
        </div>    
        <div className="uUpdate">
          <span className="uuTitle">Edit</span>
          <form action="#" className="uuForm">
            <div className="uuLeft">
              <div className="uuItem">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Erfan__es' className='uuInput'/>
              </div>
              <div className="uuItem">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Erfan Ebi' className='uuInput'/>
              </div>  
              <div className="uuItem">
                <label htmlFor="">Phone</label>
                <input type="number" placeholder='09918790969' className='uuInput'/>
              </div>
              <div className="uuItem">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Erfan88@gmail.com' className='uuInput'/>
              </div>    
              <div className="uuItem">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Tehran | Iran ' className='uuInput'/>
              </div>    
            </div>  
            <div className="uuRight">
              <div className="uuUpload">
                <img src={p1} alt="" className="uuImg" />
                <label htmlFor="file"><PublishOutlinedIcon className='uuIcon'/></label>
                <input type="file" id='file' style={{display:"none"}}/>
              </div>
              <button className="uuButton">Update</button>
            </div>
          </form>  
        </div>    
      </div>
    </div>
  )
}

export default User;