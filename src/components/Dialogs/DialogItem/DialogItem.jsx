import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import defaultFriendAvatar from '../../../assets/images/friendDefaultAvatar.png';

const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <div>
                <img className={style.avatar} src={defaultFriendAvatar}/>
            </div>
            <div className={style.nick}>
                <NavLink activeClassName={style.active} to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;