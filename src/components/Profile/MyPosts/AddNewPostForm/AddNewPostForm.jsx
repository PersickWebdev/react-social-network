import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {withFormValidation} from "../../../common/FormsControls/FormsControls";
import style from '../MyPosts.module.css';

const maxLength10 = maxLengthCreator(10);
const Textarea = withFormValidation("textarea");

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button className={style.form__button}>Post</button>
            </div>
        </form>
    )
}

export const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm);