import React from "react";
import {createFiled, withFormValidation} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const Input = withFormValidation('input');
const Textarea = withFormValidation('textarea');

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                <b>Full Name:</b>
                {createFiled('fullName', Input, 'Your name ...', [])}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createFiled('lookingForAJob', Input, null, [], {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills:</b>
                {createFiled('lookingForAJobDescription', Textarea, 'Your skills ...', [])}
            </div>
            <div>
                <b>About me:</b>
                {createFiled('aboutMe', Textarea, 'Tell about you ...', [])}
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            {key} : {createFiled('contacts.' + key, Input, null, [])}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

export default reduxForm({form: 'editProfile'})(ProfileDataForm);