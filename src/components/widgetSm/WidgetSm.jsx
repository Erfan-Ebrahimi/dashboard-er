import React from 'react';
import "./widgetSm.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='wsTitle'>New Join Members</span>
      <ul className='wsList'>
        <li className='wsListItem'>
          <img className='wsImg' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imgUser" />
          <div className='wsUser'>
            <span className='wsUserName'>Mina Dashti</span>
            <span className='wsUserTitle'>Front-end Developer</span>
          </div>
          <button className='wsButton'>
            <VisibilityIcon/>
          </button>
        </li>
        <li className='wsListItem'>
          <img className='wsImg' src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="imgUser" />
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