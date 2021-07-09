import React, { useContext } from "react";
import { FeaturedContext } from '../../Context/FeaturedContext';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const FeaturedDataDelete = (props) => {
  const { deleteFeatured } = useContext(FeaturedContext);

  return (
      <IconButton onClick={() => deleteFeatured(props.id)}>
        <DeleteIcon />
      </IconButton>
  )
}

export default FeaturedDataDelete