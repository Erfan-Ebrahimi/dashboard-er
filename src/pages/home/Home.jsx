import React from 'react';

// ---------- COMPONENTS -----------//
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';


// ---------- STYLE -----------//
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
    </div>
  )
}

export default Home;