import React, { useContext } from "react";
import { FeaturedContext } from '../../Context/FeaturedContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Delete = (props) => {
  const { deleteFeatured } = useContext(FeaturedContext);

  return (
      <IconButton onClick={() => deleteFeatured(props.id)}>
        <DeleteIcon />
      </IconButton>
  )
}

const Submit = (props) => {
  const { postFeaturedData } = useContext(FeaturedContext);

  return (
      <button onClick={postFeaturedData}>Post to Featured Bar</button>
  )
}

const FeaturedButton = {Delete, Submit}

export default FeaturedButton