import React from "react";
import Banner from './HomeComponents/Banner';
import AboutStatement from './HomeComponents/AboutStatement';
import Stats from './HomeComponents/Stats';
import AdditionalInfo from './HomeComponents/AdditionalInfo';
import './style.css';

const Home = (props) => {
  return (
    <div className="home-page">
      <Banner />
      <AboutStatement />
      <Stats />
      <AdditionalInfo />
    </div>
  )
}

export default Home