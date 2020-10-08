import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {withFormValidation} from "../../common/FormsControls/FormsControls";
import style from '../Dialogs.module.css';

const maxLength20 = maxLengthCreator(20);
const Textarea = withFormValidation("textarea");

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div>
                <Field name={"newMessageText"} component={Textarea} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button className={style.form__button}>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);