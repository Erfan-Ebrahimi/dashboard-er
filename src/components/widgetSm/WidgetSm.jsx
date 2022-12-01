import React from 'react';
import "./widgetSm.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';

import p1 from "../../asset/p1.jpg";
import p2 from "../../asset/p2.jpg";
import p3 from "../../asset/p3.jpg";
import p4 from "../../asset/p4.jpg";

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='wsTitle'>New Join Members</span>
      <ul className='wsList'>
        <li className='wsListItem'>
          <img className='wsImg' src={p4} alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src={p3}alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src={p2} alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src={p1} alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm;