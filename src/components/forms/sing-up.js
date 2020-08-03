import React, { Component } from 'react';
import {Link, Redirect, withRouter} from "react-router-dom";
import './form.scss';
import { Success } from "../success/success";
import {validateRegex, checkValueLength, converterFormDataToJson} from "../../helpers/helpers";
import { api } from "../../api/api-heroku";

class FormSingUp extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            username: '',
            first_name: '',
            last_name: '',
            password: '',
            isValidForm: false,
            isTypeInputText: false,
            isValidPassword: false,
            showSuccess: false
        }

        this.state = this.initialState;
    }

    validateForm = (state) => {
        const { username, first_name, last_name, password, isValidPassword } = state;

        return Boolean(
            checkValueLength(username, 1, 150) &&
            checkValueLength(first_name, 1, 30) &&
            checkValueLength(last_name, 1, 150) &&
            checkValueLength(password, 1, 128) &&
            isValidPassword
        );
    };

    handleChangeUsername = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            username: value,
            isValidForm: this.validateForm({ ...state, username: value })
        }));
    }

    handleChangeFirstName = (evt) => {
        const value = evt.target.value.trim();
        this.setState((state) => ({
            first_name: value,
            isValidForm: this.validateForm({ ...state, first_name: value })
        }));
    }

    handleChangeLastName = (evt) => {
        const value = evt.target.value.trim();

        this.setState((state) => ({
            last_name: value,
            isValidForm: this.validateForm({
                ...state,
                last_name: value,
                })
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
        const { history } = this.props;

        const formData = new FormData(evt.target);
        formData.append("is_active", "true")
        const jsonData = converterFormDataToJson(formData);

        const headersAppend = {
            "accept": "application/json",
            "Authorization": "Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e"
        }

        api.createUser(jsonData, headersAppend)
            .then((data) => {
                if (data.id) {
                    this.setState({showSuccess: true});
                    setTimeout(() => {
                        history.push("/sing-in")
                    }, 3500)
                }
            })
    }

    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to="/" />
        }

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
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"first_name"} id={"first_name"} required maxLength={30}
                               value={this.state.first_name}
                               onChange={this.handleChangeFirstName}/>
                        <label className={"form__label form__label--absolute"} htmlFor={"first_name"}>Имя</label>
                    </div>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"last_name"} id={"last_name"} required maxLength={150}
                               value={this.state.last_name}
                               onChange={this.handleChangeLastName}
                        />
                        <label className={"form__label form__label--absolute"} htmlFor={"last_name"}>Фамилия</label>
                    </div>
                    <div className={"form__field"}>
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
                        <button className={"btn form__btn"} type={"submit"} disabled={!this.state.isValidForm}>Зарегистрироваться </button>
                    </div>
                    <div className={"form__field form__field--text-center"}>
                        <span className={"form__question"}>Есть аккаунт?</span>
                        <Link className={"form__link"} to="/sing-in">Войти</Link>
                    </div>
                </form>
                {
                    this.state.showSuccess ? <Success text={"зарегистрированы"}/> : ""
                }
            </React.Fragment>
            )
    }
}

export default withRouter(FormSingUp);
