import React, {useState, useContext} from 'react';
import { LoginStatusContext } from '../../Context/LoginStatusContext';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const EditButton = (props) => {
  const loggedInContext = (useContext(LoginStatusContext));
  const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" /> });

  const editShown = loggedInContext.editShown

  function toggleEditBtn() {
    loggedInContext.setEditBtn({ shown: !loggedInContext.editBtn.shown })
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
    <div>
        <section className="edit-buttons">
          <IconButton onClick={toggleEditBtn()}>
            {/* {loggedInContext.toggleClass.render} */}
          </IconButton>
        </section>
    </div>
  )

}

export default EditButton