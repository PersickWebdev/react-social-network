import React from "react";
import {Field, reduxForm} from 'redux-form';
import {required} from "../../utils/validators/validators";
import {createFiled, withFormValidation} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {logInThunk, logOutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css';

const Input = withFormValidation("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createFiled('email', Input, 'Enter your email', [required])}
            {createFiled('password', Input, 'Enter your password', [required], {type: 'password'})}
            {createFiled('rememberMe', Input, null, [], {type: 'checkbox'}, 'Remember me')}

            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createFiled('captcha', Input, 'Symbols from captcha ...', [required])}

            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button> Submit </button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logInThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1> Login </h1>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {logInThunk, logOutThunk})(Login);