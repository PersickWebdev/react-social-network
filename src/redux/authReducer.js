import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA_URL :
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: {captchaUrl}
    }
}

export const getAuthThunk = () => async (dispatch) => {
        let data = await authAPI.getAuth();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login, true));
        }
}

export const logInThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.logIn(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthThunk())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrlThunk());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logOutThunk = () => async (dispatch) => {
    let data = await authAPI.logOut()
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrlThunk = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export default authReducer;