import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../api/api-heroku";
import { getAllUsers, getUserInfo } from "../../actions";
import {checkValueLength, converterFormDataToJson, searchUser, validateRegex} from "../../helpers/helpers";
import {Success} from "../success/success";
import "./my-profile.scss";

class MyProfile extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            first_name: '',
            id: '',
            is_active: true,
            last_name: '',
            username: '',
            password: '',
            isValidForm: false,
            isTypeInputText: false,
            isValidPassword: false,
            showSuccess: false,
            isDisableForm: true
        }

        this.state = this.initialState;
    }

    componentDidMount() {
        const headersAppend = {
            Authorization: localStorage.getItem('token')
        }

        api.getAllUsers(headersAppend)
            .then((users) => {
                this.props.getAllUsersDispatch(users);
                const user = searchUser(users, localStorage.getItem('login'));
                this.props.getUserInfoDispatch(user);

                this.setState((state) => {
                    return Object.assign({
                        ...state,
                        id: user.id,
                        is_active: user.is_active,
                        username: user.username,
                        first_name: user.first_name,
                        last_name: user.last_name
                    })
                })
            })
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
        this.setState({showSuccess: true})
        const formData = new FormData(evt.target);
        const jsonData = converterFormDataToJson(formData);

        const headersAppend = {
            "accept": "application/json",
            "Authorization": localStorage.getItem("token")
        }

        api.updateUser(jsonData, this.state.id, headersAppend)
            .then((data) => {
                if (data.id) {
                    this.setState({isDisableForm: true});
                    setTimeout(() => {
                        this.setState({showSuccess: false});
                    }, 3500)
                }
            })
    }

    handleClickEdit = () => {
        this.setState({isDisableForm: false})
    }

    handleClickExit = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        this.props.history.push("/sing-in");
    }

    render() {
        return (
                <>
                    <div className="my-profile">
                        <button
                            disabled={!this.state.isDisableForm}
                            onClick={this.handleClickEdit}
                            className="btn btn--edit my-profile__btn-left" type="button"
                        >Редактировать мои данные</button>
                        <button
                            onClick={this.handleClickExit}
                            className="btn btn--exit my-profile__btn-right" type="button"
                        >Выйти</button>
                    </div>
                    <form className={"form"}
                          onSubmit={this.handleSubmit}

                        >
                        <fieldset
                            className="form__fieldset"
                            disabled={this.state.isDisableForm}
                            >
                            <legend className="visually-hidden">Данные пользователя</legend>
                            <div className={"form__field"}>
                                <input className={"form__input"} type={"text"} name={"username"} id={"username"} required minLength={1} maxLength={150}
                                       value={this.state.username}
                                       disabled={true}
                                       pattern={"^[\\w.@+-]+$"}
                                        />
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
                                <input className={"form__input"} name={"password"} id={"password"} minLength={8} maxLength={128}
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
                                <button className={"btn form__btn"} type={"submit"} disabled={!this.state.isValidForm}>Сохранить новые данные</button>
                            </div>
                        </fieldset>
                    </form>
                    {
                        this.state.showSuccess ? <Success text={"отредактировали данные"}/> : ""
                    }
                </>
    )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    getAllUsersDispatch: (users) => {
        dispatch(getAllUsers(users));
    },
    getUserInfoDispatch: (user) => {
        dispatch(getUserInfo(user));
    }
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MyProfile)
)
