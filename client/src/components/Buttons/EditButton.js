import React, { useState, useContext } from 'react';
import { LoginStatusContext } from '../../Context/LoginStatusContext';
import { EditStatusContext } from '../../Context/EditContext';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const EditButton = (props) => {
  const loggedInContext = (useContext(LoginStatusContext));
  // const editBtn = editStatus.editBtn
  const loggedIn = true
  // loggedInContext.loginState
  // console.log(edit)

  // function toggleEditBtn() {
  //   loggedInContext.setEditBtn({ shown: !loggedInContext.editBtn.shown })
  //   if (editStatus.toggleClass.edit === false) {
  //     editStatus.setToggleClass({
  //       edit: !editStatus.toggleClass.edit,
  //       render:
  //         <VisibilityIcon className="icon" />
  //     })
  //   } else if (editStatus.toggleClass.edit === true) {
  //     editsetToggleClass({
  //       edit: !editStatus.toggleClass.edit,
  //       render:
  //         <EditIcon className="icon" />
  //     })
  //   }
  // }

  return (
    <div>
      {loggedIn ? (

        <section className="edit-buttons">
          <IconButton onClick={props.edit.toggleEditBtn()}>
            {props.edit.toggleClass.render}
          </IconButton>
        </section>
      ) : null}

    </div>
  )

}

export default EditButton