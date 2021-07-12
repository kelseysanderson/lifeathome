import React, { useContext } from "react";
import { ServicesContext } from '../../Context/ServicesContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Delete = (props) => {
  const { deleteService } = useContext(ServicesContext);

  return (
    <>
      <IconButton onClick={() => deleteService(props.serviceId)} style={{ color: 'rgb(177, 9, 9)' }}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

const Submit = (props) => {
  const { postServicesData } = useContext(ServicesContext);

  return (
    <button onClick={postServicesData}>Post to Services Bar</button>
  )
}

const ServicesButton = { Delete, Submit }

export default ServicesButton
