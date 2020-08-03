import React from "react";
import './title.scss';

export const Title = ({ title, isShowDesc = true }) => {
    return (
        <>
            <h1 className={"title"}>{title}</h1>
            {
                isShowDesc ? <p className={"title__desc"}>Введите свои данные</p> : ""
            }
        </>
    )
}
