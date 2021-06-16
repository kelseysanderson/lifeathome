import React, { useState, useEffect } from "react";
import Banner from '../../components/HomeComponents/Banner';
import AboutStatement from '../../components/HomeComponents/AboutStatement';
import Stats from '../../components/HomeComponents/Stats';
import AdditionalInfo from '../../components/HomeComponents/AdditionalInfo';
import API from "../../utils/API.js";
import './style.css';

const Home = (props) => {
  // const [homePage, setHomePage] = useState([]);

  // useEffect(() => {
  //   loadHomePage();
  // }, []);

  // function loadHomePage() {
  //   API.getHome()
  //     .then(res =>
  //       console.log(res)
  //       // setHomePage(res.data),
  //     )
  //     .catch(err => console.log(err));
  // };

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