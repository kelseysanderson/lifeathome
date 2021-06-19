import React from "react";
import Banner from '../../components/HomeComponents/Banner';
import AboutStatement from '../../components/HomeComponents/AboutStatement';
import Stats from '../../components/HomeComponents/Stats';
import AdditionalInfo from '../../components/HomeComponents/AdditionalInfo';
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