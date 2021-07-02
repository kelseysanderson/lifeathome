import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const AddPost = (props) => {
    const [addPost, setAddPost] = useState({ shown: false, renderAddPost: <AddIcon /> })

    function handleAddPost() {
        if (addPost.shown === true) {
            setAddPost({
                shown: false,
                renderAddPost: <AddIcon />
            })
        } else if (addPost.shown === false) {
            setAddPost({
                shown: true,
                renderAddPost: <RemoveIcon />
            })
        }
    }

    return (
        <IconButton onClick={handleAddPost}>
            {addPost.renderAddPost}
        </IconButton>
    )

}

export default AddPost