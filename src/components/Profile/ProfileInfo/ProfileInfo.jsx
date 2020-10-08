import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userDefaultAvatar from '../../../assets/images/userDefaultAvatar.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    const onAvatarSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    }

    return (
        <div className={style.container}>
            <div className={style.avatarBlock}>
                <img className={style.profile__img} src={props.profile.photos.large ? props.profile.photos.large : userDefaultAvatar}/>
                {props.isOwner && <input type={'file'} onChange={onAvatarSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={props.profile}
                                       initialValues={props.profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   activateEditMode={() => setEditMode(true)}/>}
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;