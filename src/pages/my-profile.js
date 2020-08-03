import React from "react";
import MyProfile from "../components/my-profile/my-profile";
import {Title} from "../components/title/title";

export const PageMyProfile = () => {
    return (
        <>
            <Title title={"Мои данные"} isShowDesc={false} />
            <MyProfile/>
        </>
    )
}


