import React from 'react';
import "./widgetLg.scss";

import p1 from "../../asset/p1.jpg";
import p2 from "../../asset/p2.jpg";
import p3 from "../../asset/p3.jpg";
import p4 from "../../asset/p4.jpg";


const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"wlButton " + type}>{type}</button>    //chera bayad yek fasele bezarim baray inke class ha anjam beshavad
  }

  return (
    <div className='widgetLg'>
      <h3 className="wlTitle">Lates transactions</h3>
      <table className='wlTable'>
        <tbody>
        <tr className='wlTr'>
          <th className='wlTh'>Customer</th>
          <th className='wlTh'>Date</th>
          <th className='wlTh'>Amount</th>
          <th className='wlTh'>Status</th>
        </tr>
        <tr className='wlTr'>
          <td className='wlUser'>
            <img className='wlUserImg' src={p1} alt="userImg"/>
            <span className='wlUsername'>Hossein Sadeghi</span>
          </td>
          <td className='wlDate'>10 Mar 2013</td>
          <td className='wlAmount'>$42.7</td>
          <td className='wlStatus'><Button type="Approved"/></td>
        </tr>
        <tr className='wlTr'>
          <td className='wlUser'>
            <img className='wlUserImg' src={p2} alt="userImg"/>
            <span className='wlUsername'>Nastaran Hosseini</span>
          </td>
          <td className='wlDate'>5 Apr 2018</td>
          <td className='wlAmount'>$87.9</td>
          <td className='wlStatus'><Button type="Declined"/></td>
        </tr>
        <tr className='wlTr'>
          <td className='wlUser'>
            <img className='wlUserImg' src={p3} alt="Declined"/>
            <span className='wlUsername'>Mina Saeed</span>
          </td>
          <td className='wlDate'>8 Apr 2020</td>
          <td className='wlAmount'>$122.8</td>
          <td className='wlStatus'><Button type="Pending"/></td>
        </tr>
        <tr className='wlTr'>
          <td className='wlUser'>
            <img className='wlUserImg' src={p4} alt="userImg"/>
            <span className='wlUsername'>Reza Salami</span>
          </td>
          <td className='wlDate'>18 Jun 2003</td>
          <td className='wlAmount'>$17.4</td>
          <td className='wlStatus'><Button type="Approved"/></td>
        </tr>
        </tbody>
        
      </table>
    </div>
  )
}

export default WidgetLg;