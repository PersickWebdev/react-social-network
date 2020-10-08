import React from "react";
import style from './ProfileInfo.module.css';

const Contact = (props) => {
    return (
        <div>
            {props.contactTitle} : {props.contactValue}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={style.userInfo__container}>
            { props.isOwner && <div><button onClick={props.activateEditMode}>Edit Info</button></div> }

            <div className={style.userInfo__fullNameBox}>
                <span className={style.userInfo__fullName}>
                    <b>Full Name:</b> {props.profile.fullName}
                </span>
            </div>

            <div className={style.userInfo__lookingForAJobBox}>
                <span className={style.userInfo__lookingForAJob}>
                    <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
                </span>
            </div>

            <div className={style.userInfo__lookingForAJobDescriptionBox}>
                <span className={style.userInfo__lookingForAJobDescription}>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </span>
            </div>

            <div className={style.userInfo__aboutMeBox}>
                <span className={style.userInfo__aboutMe}>
                    <b>About me:</b> {props.profile.aboutMe}
                </span>
            </div>


            <div className={style.userInfo__contactsBox}>
                <span className={style.userInfo__contacts}>
                    <b>Contacts:</b>
                    {Object.keys(props.profile.contacts).map(key => {
                            return <Contact key={key}
                                            contactTitle={key}
                                            contactValue={props.profile.contacts[key]}/>
                        })}
                </span>
            </div>

        </div>
    )
}

export default ProfileData;