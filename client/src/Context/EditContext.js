import React, { useState, createContext } from "react";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const EditStatusContext = createContext();

export const LoginStatusProvider = ({ children }) => {
    const [editBtn, setEditBtn] = useState({ shown: false })
    const [toggleClass, setToggleClass] = useState({ edit: false, render: <EditIcon className="icon" /> });

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
        <EditStatusContext.Provider value={{ loginState, editBtn, toggleClass, authenticateLogin, logout, toggleEditBtn }}>
            {children}
        </EditStatusContext.Provider>
    );
};

