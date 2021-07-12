import React, {useContext} from "react";
import {ServicesContext} from '../../Context/ServicesContext'

const Delete = (props) => {
  const {deleteService} = useContext(ServicesContext);

  return (
    <>
      <button><button className="red-btn" onClick={() => deleteService(props.postId)} style={{color:'rgb(177, 9, 9)'}}>Delete Post</button></button>
    </>
  )
}

const Submit = (props) => {
  const { postServicesData } = useContext(ServicesContext);

  return (
      <button onClick={postServicesData}>Post to Services Bar</button>
  )
}

const ServicesButton = {Delete, Submit}

export default ServicesButton
