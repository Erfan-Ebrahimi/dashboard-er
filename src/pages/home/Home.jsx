import React from 'react';

// ---------- COMPONENTS -----------//
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';


// ---------- DATA -----------//
import {userData} from "../../dummyData"
// ---------- STYLE -----------//
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" dataKey1="Active User" dataKey2="Deactive User"  grid/>
    </div>
  )
}

export default Home;