import React, { useState, createContext } from "react";
import API from "../utils/API";

export const LoginStatusContext = createContext();

export const LoginStatusProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(false)

    function authenticateLogin (id, input) {
        API.authLogin(id, input)
        .then(res => {
            if (res.data) {setLoginState(true)}
        })c
    }

    function logout () {
        setLoginState(false)
    }

    return (
        <LoginStatusContext.Provider value={{loginState, authenticateLogin, logout}}>
            {children}
        </LoginStatusContext.Provider>
    );
};
