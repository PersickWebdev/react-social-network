import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userDefaultAvatar from "../../assets/images/userDefaultAvatar.png";
import React from "react";

const User = (props) => {
    return (
        <div key={props.user.id} className={style.user__container}>
            <div>
                <div className={style.user__avatarBox}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img className={style.avatar}
                             src={props.user.photos.small != null ? props.user.photos.small : userDefaultAvatar}/>
                    </NavLink>
                </div>

            </div>
            <div className={style.user__dataBox}>
                <div className={style.user__nameStatusBox}>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </div>
                <div className={style.user__location}>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>

            <div className={style.user__buttonsBox}>
                {props.user.followed
                    ? <button className={style.user__button}
                              disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.unfollow(props.user.id)
                    }}>Unfollow</button>
                    : <button className={style.user__button}
                              disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                        props.follow(props.user.id)
                    }}>Follow</button>}
            </div>

        </div>
    )
}

export default User;