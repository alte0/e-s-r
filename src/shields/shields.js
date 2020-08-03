import { Redirect } from "react-router-dom";
import React from "react";

export const PrivatePage = (props) => {
    if (!localStorage.getItem('token')){
        return <Redirect to="/sing-in" />
    }

    return props.children;
}

export const ProtectPage = (props) => {
    if (localStorage.getItem('token')){
        return <Redirect to="/" />
    }

    return props.children;
}
