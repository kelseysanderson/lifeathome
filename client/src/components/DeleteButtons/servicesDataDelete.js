import React, {useContext} from "react";
import {ServicesContext} from '../../Context/ServicesContext'

const ServicesDataDelete = (props) => {
  const {deleteService} = useContext(ServicesContext);

  return (
    <>
      <button><button className="red-btn" onClick={() => deleteService(props.postId)}>Delete Post</button></button>
    </>
  )
}

export default ServicesDataDelete