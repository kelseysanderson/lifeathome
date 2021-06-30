import React, { useContext, useState, setState } from "react";
import Banner from './HomeComponents/Banner';
import { SiteContext } from '../../Context/SiteContext';
import AboutStatement from './HomeComponents/AboutStatement';
import Stats from './HomeComponents/Stats';
import AdditionalInfo from './HomeComponents/AdditionalInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const Home = (props) => {
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ text: "Edit as Admin", render: <span id="edit-icon"><FontAwesomeIcon icon={faEye} /></span> });

  function toggleEditBtn() {
    setEditBtn({ shown: !editBtn.shown })
    if (toggleClass.text === "Edit as Admin") {
      setToggleClass({ text: "View as User", render: <span id="edit-icon"><FontAwesomeIcon icon={faEye} /></span> })
    } else if (toggleClass.text === "View as User") {
      setToggleClass({ text: "Edit as Admin", render: <span id="edit-icon"><FontAwesomeIcon icon={faEdit} /></span> })
    }
  }

  return (
    <div className="home-page">
      <button className={`edit-btn ${toggleClass.class}`} onClick={toggleEditBtn}>{toggleClass.text}{toggleClass.render}</button>
      <Banner edit={editBtn} />
      <AboutStatement edit={editBtn} />
      <Stats edit={editBtn} />
      <AdditionalInfo edit={editBtn} />
    </div>
  )
}

export default Home;