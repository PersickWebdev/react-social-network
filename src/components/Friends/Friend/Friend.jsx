import React from 'react';
import style from './../Friends.module.css';
import {NavLink} from "react-router-dom";
import friendDefaultAvatar from '../../../assets/images/friendDefaultAvatar.png';

const Friend = (props) => {
    return (
        <div className={style.friend__container}>
            <div>
                <img className={style.friend__avatar} src={friendDefaultAvatar}/>
            </div>
            <div className={style.links}>
                <NavLink to={"/friend/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Friend;