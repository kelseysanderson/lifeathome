import React, { useState, useContext } from "react";
import { LoginStatusContext } from '../../Context/LoginStatusContext';
import Banner from './HomeComponents/Banner';
import AboutStatement from './HomeComponents/AboutStatement';
import Stats from './HomeComponents/Stats';
import AdditionalInfo from './HomeComponents/AdditionalInfo';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';

const Home = (props) => {
  const loggedInContext = (useContext(LoginStatusContext));
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" /> });
  const loggedIn = loggedInContext.loginState

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
        <div style={{ backgroundColor: '#232022' }}>
            <IconButton onClick={toggleEditBtn} style={{ color: 'whitesmoke', marginLeft:'25px' }}>
              {toggleClass.render}
            </IconButton>
        </div>
      ) : null}
      <Banner edit={editBtn} loggedIn={loggedIn} />
      <AboutStatement edit={editBtn} loggedIn={loggedIn} />
      <Stats edit={editBtn} loggedIn={loggedIn} />
      <AdditionalInfo edit={editBtn} loggedIn={loggedIn} />
    </div>
  )
}

export default Home;