import React from "react";
import style from './FormsControls.module.css';
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const withFormValidation = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <Element {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createFiled = (name, component, placeholder, validators, props = {}, text = '') => {
    return (
        <div>
            <Field name={name}
                   component={component}
                   placeholder={placeholder}
                   validate={validators}
                   {...props}
            /> {text}
        </div>
    )
}