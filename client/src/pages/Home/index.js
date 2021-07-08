import React, { useState, useContext } from "react";
import { SiteContext } from '../../Context/SiteContext';
import Banner from './HomeComponents/Banner';
import AboutStatement from './HomeComponents/AboutStatement';
import Stats from './HomeComponents/Stats';
import AdditionalInfo from './HomeComponents/AdditionalInfo';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';

const Home = (props) => {
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" /> });
  const loggedIn = true;
  const { siteData } = useContext(SiteContext);

  function toggleEditBtn() {
    setEditBtn({ shown: !editBtn.shown })
    if (toggleClass.edit === false) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <VisibilityIcon className="icon" />
      })
    } else if (toggleClass.edit === true) {
      setToggleClass({
        edit: !toggleClass.edit,
        render:
          <EditIcon className="icon" />
      })
    }
  }

  return (
    <div className="home-page">
      {loggedIn ? (
        <IconButton onClick={toggleEditBtn}>
          {toggleClass.render}
        </IconButton>
      ) : null}
      <Banner edit={editBtn} loggedIn={loggedIn}/>
      <AboutStatement edit={editBtn} loggedIn={loggedIn} />
      <Stats edit={editBtn} loggedIn={loggedIn} />
      <AdditionalInfo edit={editBtn} loggedIn={loggedIn} />
    </div>
  )
}

export default Home;