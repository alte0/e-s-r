import React, { Component } from 'react';
import {Link, withRouter } from "react-router-dom";
import './form.scss';
import { Success } from "../success/success";
import { validateRegex, checkValueLength, converterFormDataToJson } from "../../helpers/helpers";
import { api } from "../../api/api-heroku";

class FormSingIn extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            username: '',
            password: '',
            isValidForm: false,
            isTypeInputText: false,
            isValidPassword: false,
            showSuccess: false
        }

        this.state = this.initialState;
    }

    validateForm = (state) => {
        const { username, password, isValidPassword } = state;

        return Boolean(
            checkValueLength(username, 1, 150) &&
            checkValueLength(password, 8, 128) &&
            isValidPassword
        );
    };

    handleChangeUsername = (evt) => {
        const value = evt.target.value.trim();
        this.setState((state) => ({
            username: value,
            isValidForm: this.validateForm({ ...state, username: value })
        }));
    }

    handleChangePassword = (evt) =>{
        const value = evt.target.value.trim();
        const pswdRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        const isValidPassword = validateRegex(pswdRegex, value);

        this.setState((state) => ({
            password: value,
            isValidPassword: isValidPassword,
            isValidForm: this.validateForm({
                ...state,
                password: value,
                isValidPassword: isValidPassword
            })
        }));
    }

    handleClickToggle = () =>{
        this.setState((state) => ({isTypeInputText: !state.isTypeInputText}));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const jsonData = converterFormDataToJson(formData);

        api.getTokenAndAuth(jsonData)
            .then((data) => {
                localStorage.setItem('token', `Token ${data.token}`);
                localStorage.setItem('login', this.state.username);

                this.setState({showSuccess: true});

                setTimeout(() => {
                    this.props.history.push("/");
                }, 3500)
            })
    }

    render() {
        return (
            <React.Fragment>
                <form className={"form"}
                      onSubmit={this.handleSubmit}>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"username"} id={"username"} required minLength={1} maxLength={150}
                               value={this.state.username}
                               onChange={this.handleChangeUsername}
                               pattern={"^[\\w.@+-]+$"}/>
                        <label className={"form__label form__label--absolute"} htmlFor={"username"}>Логин</label>
                    </div>
                    <div className={"form__field form__field--mb40"}>
                        <input className={"form__input"} name={"password"} id={"password"} required minLength={8} maxLength={128}
                               type={this.state.isTypeInputText ? "text" : "password" }
                               value={this.state.password}
                               onChange={this.handleChangePassword}
                               pattern={"^(?=.*[A-Z])(?=.*\\d).{8,}$"}
                        />
                        <label className={"form__label form__label--absolute"} htmlFor={"password"}>Пароль</label>
                        <button className={"form__switch-input-type"} type={"button"}
                                onClick={this.handleClickToggle}>
                            <svg className={this.state.isTypeInputText ? "eye eye--on" : "eye" } width={16} height={12} viewBox="0 0 19 14" fill="none">
                                <path
                                    d="M12.113 7A2.572 2.572 0 116.97 7a2.572 2.572 0 015.143 0v0z"
                                />
                                <path
                                    d="M1.363 7a8.575 8.575 0 0116.358 0A8.575 8.575 0 011.363 7v0z"
                                />
                            </svg>
                            <span className={"visually-hidden"}>Посмотреть или скрыть пароль</span>
                        </button>
                    </div>
                    <div className={"form__field"}>
                        <button className={"btn form__btn"} type={"submit"} disabled={!this.state.isValidForm}>Войти </button>
                    </div>
                    <div className={"form__field form__field--text-center"}>
                        <span className={"form__question"}>Нет аккаунта?</span>
                        <Link className={"form__link"} to="/sing-up">Зарегистрироваться</Link>
                    </div>
                </form>
                {
                    this.state.showSuccess ? <Success text={"авторизированны"}/> : ""
                }
            </React.Fragment>
        )
    }
}

export default withRouter(FormSingIn);
