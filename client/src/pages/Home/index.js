import React, { useContext, useState, setState } from "react";
import Banner from './HomeComponents/Banner';
import { SiteContext } from '../../Context/SiteContext';
import AboutStatement from './HomeComponents/AboutStatement';
import Stats from './HomeComponents/Stats';
import AdditionalInfo from './HomeComponents/AdditionalInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';

const Home = (props) => {
  const [editBtn, setEditBtn] = useState({ shown: false })
  const [toggleClass, setToggleClass] = useState({ edit:false, render:  <EditIcon className="icon" /> });
  const loggedIn = true;
  console.log(toggleClass.edit)

  function toggleEditBtn() {
    setEditBtn({ shown: !editBtn.shown })
    if (toggleClass.edit === false) {
      setToggleClass({ edit: true, render: <VisibilityIcon className="icon"/> })
    } else if (toggleClass.edit === true) {
      setToggleClass({ edit: false,  render: <EditIcon className="icon"/> })
    }
  }

  return (
    <div className="home-page">
      {loggedIn ? (
        <>
          <IconButton aria-label="delete" style={{marginLeft: '80px'}}>
            <button className="edit-btn" onClick={toggleEditBtn}>{toggleClass.render}</button>
          </IconButton>
        </>
      ) : null}
      <Banner edit={editBtn} />
      <AboutStatement edit={editBtn} />
      <Stats edit={editBtn} />
      <AdditionalInfo edit={editBtn} />
    </div>
  )
}

export default Home;