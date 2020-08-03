import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { PageSingUp } from './pages/sing-up';
import { PageSingIn } from './pages/sing-in';
import { PageMyProfile } from "./pages/my-profile";
import AppContainer from "./components/app-container/app-container";
import { PrivatePage, ProtectPage } from "./shields/shields";
import "normalize.css";
import './App.scss';

const App = () => {
    return (
        <Router basename="/e-s-r" >
            <AppContainer>
                <Route
                    path="/sing-in">
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <ProtectPage>
                                    <PageSingIn/>
                                </ProtectPage>
                            </div>
                        </CSSTransition>
                    )}
                </Route>
                <Route
                    path="/sing-up">
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <ProtectPage>
                                    <PageSingUp/>
                                </ProtectPage>
                            </div>
                        </CSSTransition>
                    )}
                </Route>
                <Route
                    exact
                    path="/">
                    <PrivatePage>
                        <PageMyProfile/>
                    </PrivatePage>
                </Route>
            </AppContainer>
        </Router>
    )
}

export default App;
