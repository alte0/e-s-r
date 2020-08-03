import React from "react";
import { withRouter } from "react-router-dom";
import './app-container.scss';

const AppContainer = (props) => {
        const { pathname } = props.location;
        let classApp = "app-container";

        if ((pathname === "/sing-in") || (pathname === "/sing-up")) {
            classApp += ' app-container--center';
        }

        return (
            <div className={classApp}>
                {props.children}
            </div>
        )
}

export default withRouter(AppContainer);
